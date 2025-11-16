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
    setExpenses: (state, action: PayloadAction<ExpenseState>) => {
    state.push(action.payload)
    },
    clearUser: (state) => {
      state=[];
    },
  },
});

export const { setExpenses, clearUser } = expenseSlice.actions;
export default expenseSlice.reducer;
