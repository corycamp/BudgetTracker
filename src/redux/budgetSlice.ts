import { Budget } from "@/lib/types";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: Budget[] = [];

export const BudgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget: (_state, action: PayloadAction<Budget[]>) => action.payload,
    addBudget: (state, action: PayloadAction<Budget[]>) => {
      state.push(...action.payload)
    },
    clearBudget: (state) => {
      state=[]
    },
  },
});

export const { setBudget, addBudget, clearBudget } = BudgetSlice.actions;
export default BudgetSlice.reducer;
