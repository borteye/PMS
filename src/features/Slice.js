import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userUid: null,
  userEmail: null,
  userDisplayName: null,
  userTopics: null,
  userBio: null,
  userJobTitle: null,
  userAvatar: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setActiveUser: (state, action) => {
      state.userUid = action.payload.userUid;
      state.userEmail = action.payload.userEmail;
      state.userDisplayName = action.payload.userDisplayName;
      state.userTopics = action.payload.userTopics;
      state.userBio = action.payload.userBio;
      state.userJobTitle = action.payload.userJobTitle;
      state.userAvatar = action.payload.userAvatar;
    },
    setUserLogoutState: (state) => {
      state.userUid = null;
      state.userEmail = null;
      state.userDisplayName = null;
      state.userTopics = null;
      state.userBio = null;
      state.userJobTitle = null;
      state.userAvatar = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActiveUser, setUserLogoutState } = userSlice.actions;

export const SelectUid = (state) => state.user.userUid;
export const SelectEmail = (state) => state.user.userEmail;
export const SelectDisplayName = (state) => state.user.userDisplayName;
export const SelectTopics = (state) => state.user.userTopics;
export const SelectBio = (state) => state.user.userBio;
export const SelectJobTitle = (state) => state.user.userJobTitle;
export const SelectAvatar = (state) => state.user.userAvatar;
export const SelectUserCurrentTopics = (state) => state.user.userCurrentTopics;

export default userSlice.reducer;
