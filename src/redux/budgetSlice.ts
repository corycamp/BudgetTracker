import { BudgetState } from "@/components/common/interfaces";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: BudgetState[] = [];

export const BudgetSlice = createSlice({
  name: "budget",
  initialState,
  reducers: {
    setBudget: (_state, action: PayloadAction<BudgetState[]>) => action.payload,
    addBudget: (state, action: PayloadAction<BudgetState>) => {
      state.push(action.payload)
    },
    findAndUpdateBudget: (state, action: PayloadAction<{limit:number;category:string;createdAt:number}>) => {
      const filteredItems = state.filter(items=> items.category != action.payload.category)
      return [...filteredItems,{
        category: action.payload.category,
        limit: action.payload.limit,
        createdAt: action.payload.createdAt
      }]
    },
    removeBudget:(state, action: PayloadAction<{category:string}>) => {
      const filteredItems = state.filter(items=> items.category != action.payload.category)
      return [...filteredItems]
    },
    clearBudget: () => {
      return[]
    },
  },
});

export const { setBudget, addBudget, findAndUpdateBudget, removeBudget, clearBudget } = BudgetSlice.actions;
export default BudgetSlice?.reducer;
