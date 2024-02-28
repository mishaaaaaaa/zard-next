import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  intro: "inro",
};

export const intro = createSlice({
  name: "intro",
  initialState,
  reducers: {
    changeintro: (state, action) => {
      state.intro = action.payload;
    },
  },
});

export const { changeintro } = intro.actions;
export default intro.reducer;
