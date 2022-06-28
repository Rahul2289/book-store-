const mongoose = require("mongoose");

const booksSchema = new mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  author: {
    type: "String",
    required: true,
  },
  description: {
    type: "String",
    required: true,
  },
  image: {
    type: "String",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  available: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Book", booksSchema);
