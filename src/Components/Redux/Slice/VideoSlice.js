import { createSlice } from "@reduxjs/toolkit";
import videoData from "../../Videos/VideoData";

const videoSlice = createSlice({
  name: "videos",
  initialState: {
    videoList: videoData,
  },
  reducers: {
    addVideo: (state, action) => {
      state.videoList.unshift({
        id: Date.now(),
        ...action.payload,
      });
    },
  },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
