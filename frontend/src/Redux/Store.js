import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
const store = configureStore({
  reducer: {
    theme: dataReducer,
  },
});
export default store;
