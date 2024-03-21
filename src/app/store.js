import { configureStore } from "@reduxjs/toolkit";
import drugsReducer from "../features/drugs/drugsReducer";
import authReducer from "../features/auth/authReducer";
export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  }),
});