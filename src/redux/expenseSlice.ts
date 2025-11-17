import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ExpenseState {
    amount:number;
    category:string;
    merchant:string;
    createdAt:string;
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
    clearExpenses: (state) => {
      state=[];
    },
  },
});

export const { setExpenses, addExpenses, clearExpenses } = expenseSlice.actions;
export default expenseSlice.reducer;
