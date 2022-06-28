const express = require("express");

const router = express.Router();

const {
  getAllBooks,
  addTheBook,
  getSingleBook,
  delateTheBook,
  updateTheBook,
} = require("../controllers/booksControllers.js");

router.route("/").get(getAllBooks).post(addTheBook);
router.route("/:id").get(getSingleBook);
router.route("/:id").put(updateTheBook);
router.route("/:id").delete(delateTheBook);
module.exports = router;
