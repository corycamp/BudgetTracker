"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { setUser, UserState } from "./userSlice";
import { useEffect } from "react";
import { Budget, Expense } from "@/lib/types";
import { ExpenseState, setExpenses } from "./expenseSlice";
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
      store.dispatch(setExpenses(expenses as ExpenseState[]));
      store.dispatch(setBudget(budgets));
    }
  }, [user]);

  return <Provider store={store}>{children}</Provider>;
}
