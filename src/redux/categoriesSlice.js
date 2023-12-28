import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {
    // Reducer that always returns "Under Construction"
    underConstruction: (state) => {
      // You can modify the state here as needed
      state.list.push("Under Construction");
    },
  },
});

export const { underConstruction } = categoriesSlice.actions;
export default categoriesSlice.reducer;
