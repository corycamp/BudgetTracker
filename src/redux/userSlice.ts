import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  name?: string | null | undefined;
  email?: string | null | undefined;
  image?: string | null | undefined;
}

const initialState: UserState = {
  email: null,
  image: null
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email;
      state.image = action.payload.image
    },
    clearUser: (state) => {
      state.email = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice?.reducer;
