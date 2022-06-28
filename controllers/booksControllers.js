const Book = require("../model/books.js");

//Get ALL BOOKS

const getAllBooks = async (req, res, next) => {
  let books;

  try {
    books = await Book.find();
  } catch (error) {
    console.log(error);
  }

  if (!books) {
    res.status(404).json({ msg: `no book found` });
  }

  res.status(200).json({ books });
};

//ADD NEW BOOK

const addTheBook = async (req, res, next) => {
  let book;
  const { name, author, description, price, image, available } = req.body;

  try {
    book = new Book({
      name,
      author,
      description,
      price,
      image,
      available,
    });
    await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    res.status(500).json({ msg: `unable to add the book` });
  }

  res.status(201).json({ book });
};

//GET SINGLE BOOK

const getSingleBook = async (req, res, next) => {
  let book;
  let id = req.params.id;
  try {
    book = await Book.findById(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    res.status(500).json({ msg: `no book found with the id : ${id}` });
  }

  res.status(200).json({ book });
};

// UPDATE THE BOOK

const updateTheBook = async (req, res, next) => {
  const { name, author, description, image, price, available } = req.body;
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      description,
      image,
      price,
      available,
    });
    book = await book.save();
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: `unable to add the book ` });
  }

  return res.status(200).json({ book });
};
// DELETE THE BOOK
const delateTheBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (error) {
    console.log(error);
  }
  if (!book) {
    return res.status(404).json({ msg: `unable to delete the book ` });
  }
  return res.status(200).json({ msg: "product scucessfully deleted" });
};

module.exports = {
  getAllBooks,
  addTheBook,
  getSingleBook,
  updateTheBook,
  delateTheBook,
};
