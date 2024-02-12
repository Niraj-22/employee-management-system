import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user";
import taskSlice from "./task";

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    task: taskSlice.reducer,
  },
});

export default store;
