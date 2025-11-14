import { configureStore } from "@reduxjs/toolkit";
import userReducer from './userSlice'
import budgetReducer from './budgetSlice'
import expenseReducer from './expenseSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    budget: budgetReducer,
    expense: expenseReducer
  },
});

// Types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
