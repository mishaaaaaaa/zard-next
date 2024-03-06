import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { axios } from "@/lib/clientFetch";

const initialState = {
  steps: 0,
  isLoading: false,
  error: "",
};

export const intro = createSlice({
  name: "intro",
  initialState,
  reducers: {
    incrementStep: (state) => {},
    decrementStep: (state) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStepsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchStepsThunk.fulfilled, (state, action) => {
        state.steps = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStepsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.isLoading = false;
      });
  },
});

export const { incrementStep, decrementStep } = intro.actions;

export const fetchStepsThunk = createAsyncThunk("steps/fetchAll", async (param, thunkApi) => {
  try {
    const response = await axios.get("https://some-url-here");
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(`Error: ${err}`);
  }
});
export default intro.reducer;
