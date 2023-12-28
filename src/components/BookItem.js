import React from "react";

const BookItem = ({ book, onRemove }) => {
  const { id, title, author, category } = book;

  const handleRemove = () => {
    onRemove(id);
  };

  return (
    <div>
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <p>Category: {category}</p>
      <button onClick={handleRemove}>Remove</button>
    </div>
  );
};

export default BookItem;
