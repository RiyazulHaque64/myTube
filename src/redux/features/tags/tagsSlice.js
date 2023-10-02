import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getTags } from "./tagsAPI";

const initialState = {
  tags: [],
  isLoading: false,
  isError: false,
  error: "",
};

// Async Thunk
export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const tags = await getTags();
  return tags;
});

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (build) => {
    build
      .addCase(fetchTags.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.isLoading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isLoading = false;
        state.tags = [];
        state.isError = true;
        state.error = action.error.message;
      });
  },
});

export default tagsSlice.reducer;
