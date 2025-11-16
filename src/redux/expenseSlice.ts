import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpenseState {
    amount:number;
    category:string;
    merchant:string;
    notes?:string;
}

const initialState: ExpenseState[] = [];

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    addExpenses: (state, action: PayloadAction<ExpenseState>) => {
    state.push(action.payload)
    },
    clearExpenses: (state) => {
      state=[];
    },
  },
});

export const { addExpenses, clearExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
