import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/slices/booksSlice";

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [category, setCategory] = useState("");

  const handleAddBook = () => {
    dispatch(addBook(title, author, category));
    setTitle("");
    setAuthor("");
    setCategory("");
  };

  return (
    <div>
      <h2>Add Book</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <button onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookForm;
