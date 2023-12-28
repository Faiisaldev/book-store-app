import { createSlice } from "@reduxjs/toolkit";

let nextBookId = 4; // Starting ID for new books

const initialState = {
  books: [
    {
      id: 1,
      title: "Bukhari",
      author: "Imam Bukhari",
      category: "Islam",
    },
    {
      id: 2,
      title: "Muslim",
      author: "Imam Muslim",
      category: "Islam",
    },
    {
      id: 3,
      title: "Nissai",
      author: "Imam Nissai",
      category: "Islam",
    },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: {
      reducer(state, action) {
        state.books.push(action.payload);
      },
      prepare(title, author, category) {
        return {
          payload: {
            id: nextBookId++,
            title,
            author,
            category,
          },
        };
      },
    },
    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
