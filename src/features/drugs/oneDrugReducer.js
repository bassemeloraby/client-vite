import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import drugsService from "./drugsService";

const { getOneDrug, deleteOneDrug } = drugsService;

// get One Drug
export const getOneD = createAsyncThunk(
  "drugs/getOneDrug/:id",
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
// get One Drug
export const deleteOneD = createAsyncThunk(
  "drugs/deleteOneDrug/:id",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      return await deleteOneDrug(id);
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
  oneDrug: [],
  loading: false,
};

const oneDrugSlice = createSlice({
  name: "oneDrug",
  initialState: initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getOneD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getOneD.fulfilled, (state, action) => {
        state.loading = false;
        state.oneDrug = action.payload;
      })
      .addCase(getOneD.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteOneD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteOneD.fulfilled, (state, action) => {
        state.loading = false;
        // state.oneDrug = action.payload;
        state.oneDrug = state.oneDrug.filter(
          (drug) => drug._id !== action.payload.id
        );
      })
      .addCase(deleteOneD.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default oneDrugSlice.reducer;
