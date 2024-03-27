import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import drugsService from "./drugsService";

const { getDrugs, deleteOneDrug, updateOneDrug } = drugsService;

export const getD = createAsyncThunk("drugs/getDrugs", getDrugs);
// export const getOneD = createAsyncThunk("drugs/getDrugs/:id", getOneDrug);

// delete One Drug
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

// update One Drug
export const updateOneD = createAsyncThunk(
  "drugs/updateOneDrug/:id",
  async (id, thunkAPI) => {
    console.log(id);
    try {
      return await updateOneDrug(id);
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
      .addCase(deleteOneD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(deleteOneD.fulfilled, (state, action) => {
        state.loading = false;
        // state.oneDrug = action.payload;
        state.drugs = state.drugs.filter((drug) => drug._id === action.payload);
        console.log(action.payload);
      })
      .addCase(deleteOneD.rejected, (state, action) => {
        state.loading = false;
      })
      .addCase(updateOneD.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(updateOneD.fulfilled, (state, action) => {
        state.loading = false;
        const { TradeName, id } = action.payload;

        const uu = state.drugs.find((drug) => drug._id === id);
        if (uu) {
          uu.TradeName = TradeName;
        }
        console.log(action.payload);
      })
      .addCase(updateOneD.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export default drugsSlice.reducer;
