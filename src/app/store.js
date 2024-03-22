import { configureStore } from "@reduxjs/toolkit";
import drugsReducer from "../features/drugs/drugsReducer";
import authReducer from "../features/auth/authReducer";
import oneDrugReducer from "../features/drugs/oneDrugReducer";

export const store = configureStore({
  reducer: {
    drugs: drugsReducer,
    auth: authReducer,
    oneDrug: oneDrugReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
