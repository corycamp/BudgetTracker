import { Budget } from "@/lib/types";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: Budget[] = [];

export const BudgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<Budget>) => {
      state.push(action.payload)
    },
    clearBudget: (state) => {
      state=[]
    },
  },
});

export const { addBudget, clearBudget } = BudgetSlice.actions;
export default BudgetSlice.reducer;
