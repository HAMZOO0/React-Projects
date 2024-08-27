// create store
import { configureStore } from "@reduxjs/toolkit";

// here we adding reducer
import bookmarkSlice from "../features/bookMarkSlice";

export const store = configureStore({
  reducer: { bookmarkSlice },
});
