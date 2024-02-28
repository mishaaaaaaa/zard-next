"use client";
import { configureStore } from "@reduxjs/toolkit";
import intro from "./slices/intro";

export const store = configureStore({
  reducer: {
    intro,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
