import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedVideos } from "./relatedVideosAPI";

const initialState = {
  relatedVideos: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async Thunk
export const fetchRelatedVideos = createAsyncThunk(
  "relatedVideos/fetchRelatedVideos",
  async (queryInfo) => {
    const relatedVideos = await getRelatedVideos(queryInfo);
    return relatedVideos;
  }
);

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(fetchRelatedVideos.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedVideos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = action.payload;
        state.isError = false;
        state.error = "";
      })
      .addCase(fetchRelatedVideos.rejected, (state, action) => {
        state.isLoading = false;
        state.relatedVideos = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default relatedVideosSlice.reducer;
