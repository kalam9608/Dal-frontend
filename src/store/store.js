import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./slices/profile";
import themeReducer from "./slices/theme";

export default configureStore({
  reducer: {
    profile: profileReducer,
    theme: themeReducer,
  },
});
