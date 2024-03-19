import { configureStore } from "@reduxjs/toolkit";
import drugsReducer from "../features/drugs/drugsReducer";

export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
  },
});