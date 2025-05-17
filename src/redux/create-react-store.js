import { configureStore } from "@reduxjs/toolkit";
import { profileReducer } from "./profile-reducer";
import { dialogReducer } from "./dialog-reducer";
// import { usersReducer } from "./users-reducer";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    dialogs: dialogReducer,
  },
});
