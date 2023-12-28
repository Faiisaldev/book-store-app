import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./slices/booksSlice";
import categoriesReducer from "./slices/categoriesSlice";

const store = configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

export default store;
