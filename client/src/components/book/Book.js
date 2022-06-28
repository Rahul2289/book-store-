import React from "react";
import "./Book.css";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Book = ({ book, deleteHandler }) => {
  const { _id, name, author, description, price, image } = book;

  return (
    <div className="card">
      <img
        src={image ? image : "https://pngimg.com/uploads/book/book_PNG2111.png"}
        alt={name}
      />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h3>Rs {price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`}>
        Update
      </Button>
      <Button
        onClick={() => deleteHandler(`${_id}`)}
        color="error"
        type="button"
      >
        Delete
      </Button>
    </div>
  );
};

export default Book;
