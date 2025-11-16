"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { setUser, UserState } from "./userSlice";
import { useEffect } from "react";
import { Expense } from "@/lib/types";
import { setExpenses } from "./expenseSlice";

export default function Providers({
  children,
  user,
  expenses
}: {
  children: React.ReactNode;
  user: UserState;
  expenses: Expense[]
}) {
  useEffect(() => {
    if (user) {
      store.dispatch(setUser(user));
      store.dispatch(setExpenses(expenses))
    }
  }, [user]);

  return <Provider store={store}>{children}</Provider>;
}
