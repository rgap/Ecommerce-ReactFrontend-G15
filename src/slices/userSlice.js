import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    data: JSON.parse(localStorage.getItem("user")),
  },
  reducers: {
    saveUser: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOutUser: (state) => {
      state.data = null;
      localStorage.removeItem("user");
    },
  },
});

export const { saveUser, logOutUser } = userSlice.actions;

export default userSlice.reducer;
