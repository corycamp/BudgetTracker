import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ExpenseState {
    amount:number;
    category:string;
    merchant:string;
    notes?:string;
}

const initialState: ExpenseState = {
    amount: 0,
    category: "",
    merchant: "",
};

export const expenseSlice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    setExpenses: (state, action: PayloadAction<ExpenseState>) => {
    //   state.name = action.payload.name;
    //   state.image = action.payload.image;
    },
    clearUser: (state) => {
    //   state.name = null;
    //   state.image = null;
    },
  },
});

export const { setExpenses, clearUser } = expenseSlice.actions;
export default expenseSlice.reducer;
