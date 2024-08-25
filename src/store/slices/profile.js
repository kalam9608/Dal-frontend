/* eslint-disable no-param-reassign */
const { createSlice } = require("@reduxjs/toolkit");

const profileSlice = createSlice({
  name: "profile",
  initialState: {
    name: "Richard",
  },
  reducers: {
    SET_NAME(state, action) {
      state.name = action.payload;
    },
  },
});

export const { SET_NAME } = profileSlice.actions;

export default profileSlice.reducer;
