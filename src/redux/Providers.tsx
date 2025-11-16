"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { setUser, UserState } from "./userSlice";
import { useEffect } from "react";

export default function Providers({
  children,
  user,
}: {
  children: React.ReactNode;
  user: UserState;
}) {
  useEffect(() => {
    if (user) {
      store.dispatch(setUser(user));
    }
  }, [user]);

  return <Provider store={store}>{children}</Provider>;
}
