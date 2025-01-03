import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite(state, action) {
      state.ids.push(action.payload);
    },
    removeFavorite(state, action) {
      state.ids = state.ids.filter((id) => id !== action.payload.id);
    },
  },
});

export default favoritesSlice.reducer;

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
