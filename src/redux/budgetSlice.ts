import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  image: string | null;
}

const initialState: UserState = {
  name: null,
  image: null,
};

export const BudgetSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.name = action.payload.name;
      state.image = action.payload.image;
    },
    clearUser: (state) => {
      state.name = null;
      state.image = null;
    },
  },
});

export const { setUser, clearUser } = BudgetSlice.actions;
export default BudgetSlice.reducer;
