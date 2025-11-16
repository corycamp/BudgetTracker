import { Budget } from "@/lib/types";
import { createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: Budget[] = [];

export const BudgetSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Budget>) => {
      state.push(action.payload)
    },
    clearUser: (state) => {
      state=[]
    },
  },
});

export const { setUser, clearUser } = BudgetSlice.actions;
export default BudgetSlice.reducer;
