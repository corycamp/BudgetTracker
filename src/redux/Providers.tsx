"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { setUser, UserState } from "./userSlice";
import { useEffect } from "react";
import { Budget, Expense } from "@/lib/types";
import { setExpenses } from "./expenseSlice";
import { setBudget } from "./budgetSlice";

export default function Providers({
  children,
  user,
  expenses,
  budgets,
}: {
  children: React.ReactNode;
  user: UserState;
  expenses: Expense[];
  budgets: Budget[];
}) {
  useEffect(() => {
    if (user) {
      store.dispatch(setUser(user));
      store.dispatch(
        setExpenses(
          expenses.map((expense) => {
            return {
              amount: expense.amount,
              category: expense.category,
              merchant: expense.merchant,
              createdAt: Number(expense.createdAt),
              date: Number(expense.date),
            };
          })
        )
      );
      store.dispatch(
        setBudget(
          budgets.map((budget) => {
            return {
              limit: budget.limit,
              category: budget.category,
              createdAt: Number(budget.createdAt),
            };
          })
        )
      );
    }
  }, [user]);

  return <Provider store={store}>{children}</Provider>;
}
