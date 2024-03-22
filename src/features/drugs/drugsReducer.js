import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import drugsService from "./drugsService";

const { getDrugs, getOneDrug } = drugsService;

export const getD = createAsyncThunk("drugs/getDrugs", getDrugs);
// export const getOneD = createAsyncThunk("drugs/getDrugs/:id", getOneDrug);

// Delete company
export const getOneD = createAsyncThunk(
  "drugs/getDrugs/:id",
  async (id, thunkAPI) => {
    try {
      return await getOneDrug(id);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

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
      })
      .addCase(getOneD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOneD.fulfilled, (state, action) => {
        state.loading = false;
        state.drugs = state.drugs.filter((drug) => drug.id === action.payload.id);
      })
      .addCase(getOneD.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default drugsSlice.reducer;
