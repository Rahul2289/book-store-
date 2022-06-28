import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const Books = () => {
  const [books, setBooks] = useState();

  const fetchHandler = async () => {
    const response = await axios
      .get("/api/books")
      .catch((err) => console.log(err));
    const data = await response.data;
    setBooks(data.books);
    return data;
  };

  const deleteHandler = async (id) => {
    await axios
      .delete(`/api/books/${id}`)
      .then((res) => res.data)
      .then(() => setBooks(books.filter((data) => data._id !== id)));
  };

  useEffect(() => {
    fetchHandler();
  }, []);
  console.log(books);

  return (
    <ul>
      {books &&
        books.map((book) => (
          <li key={book._id}>
            <Book book={book} deleteHandler={deleteHandler} />
          </li>
        ))}
    </ul>
  );
};

export default Books;
