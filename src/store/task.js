import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    add: (state, action) => {
      const { tasks } = action.payload;
      state.shift();
      state.unshift(tasks);
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const taskActions = taskSlice.actions;
export default taskSlice;
