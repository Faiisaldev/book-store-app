import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeBook } from "../redux/slices/booksSlice";
import BookItem from "./BookItem";

const BookList = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} onRemove={handleRemoveBook} />
      ))}
    </div>
  );
};

export default BookList;
