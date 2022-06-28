const express = require("express");
const app = express();
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
// const cors = require("cors");
const Router = require("./routes/booksRoutes.js");

const PORT = process.env.PORT || 5000;
// app.use(cors());
app.use(express.json());

app.use("/api/books", Router);
//deployment
// app.use(express.static(path.join(__dirname, "..", "client", "build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "..", "client", "build", "index.html")); // relative path
// });

mongoose.connect(process.env.MONGO_URI).then(() =>
  app.listen(PORT, () => {
    console.log(`server started on port ${PORT} and DB connected`);
  })
);
