import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    login: (state, action) => {
      const { id, email, name, password } = action.payload;
      state.push({
        id,
        email,
        name,
        password,
        tasks: [],
      });
    },
    logout: (state) => {
      state = [];
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice;
