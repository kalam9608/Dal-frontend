/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "profile",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;

export const selectTheme = (state) => state.theme.mode;
