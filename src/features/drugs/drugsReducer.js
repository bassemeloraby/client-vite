import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import drugsService from "./drugsService";

const { getDrugs } = drugsService;

export const getD = createAsyncThunk("drugs/getDrugs", getDrugs);

const initialState = {
  drugs: [],
  loading: false,
};

const drugsSlice = createSlice({
  name: "drugs",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getD.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = action.payload;
      })
      .addCase(getD.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default drugsSlice.reducer;