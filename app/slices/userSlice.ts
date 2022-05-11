import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    authenticate: (state, action) => {
      state.firstName = action.payload?.firstName;
      state.lastName = action.payload?.lastName;
      state.userName = action.payload?.userName;
    },
  },
});

export const { authenticate } = userSlice.actions;

export default userSlice.reducer;
