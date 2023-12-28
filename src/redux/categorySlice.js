import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    underConstruction: (state) => {
      // For simplicity, this reducer always returns "Under Construction"
      return "Under Construction";
    },
  },
});

export const { underConstruction } = categorySlice.actions;
export default categorySlice.reducer;
