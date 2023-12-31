import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tags: [],
  search: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload);
    },
    tagRemoved: (state, action) => {
      const isIndex = state.tags.indexOf(action.payload);
      if (isIndex !== -1) {
        state.tags.splice(isIndex, 1);
      }
    },
    searchText: (state, action) => {
      state.search = action.payload;
    },
  },
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searchText } = filterSlice.actions;
