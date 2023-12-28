import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [], // Add categories if needed
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    // Add category-related reducers if required
  },
});

export default categoriesSlice.reducer;
