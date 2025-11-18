import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExpenseState {
    amount:number;
    category:string;
    merchant:string;
    createdAt:number;
    notes?:string;
}

const initialState: ExpenseState[] = [];

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses: (_state, action: PayloadAction<ExpenseState[]>) => action.payload,
    addExpenses: (state, action: PayloadAction<ExpenseState>) => {
    state.push(action.payload)
    },
    removeExpense:(state, action: PayloadAction<{createdAt:number}>) => {
      console.log(state)
      console.log(action.payload.createdAt)
      state.forEach(item=>console.log(item))
      const filteredItems = state.filter(items=> items.createdAt != action.payload.createdAt)
      return [...filteredItems]
    },
    clearExpenses: (state) => {
      state=[];
    },
  },
});

export const { setExpenses, addExpenses,removeExpense, clearExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
