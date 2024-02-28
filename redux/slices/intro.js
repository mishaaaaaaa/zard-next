import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentStep: 1,
  totalSteps: 5,
};

export const intro = createSlice({
  name: "intro",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.currentStep += 1;
    },
    decrementStep: (state) => {
      state.currentStep -= 1;
    },
  },
});

export const { incrementStep, decrementStep } = intro.actions;
export default intro.reducer;
