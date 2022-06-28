import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Box,
  TextField,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    available: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const sendRequest = async () => {
    await axios
      .post("/api/books", {
        name: String(inputs.name),
        description: String(inputs.description),
        price: Number(inputs.price),
        author: String(inputs.author),
        image: String(inputs.image),
        available: Boolean(inputs.available),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/books"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft="auto"
        marginRight="auto"
        marginTop={5}
        padding={5}
      >
        {/* Name */}
        <FormLabel>Name</FormLabel>
        <TextField
          margin="normal"
          value={inputs.name}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="name"
        />

        {/* Author */}
        <FormLabel>Author</FormLabel>
        <TextField
          margin="normal"
          value={inputs.author}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="author"
        />

        {/* Description */}
        <FormLabel>Description</FormLabel>
        <TextField
          margin="normal"
          value={inputs.description}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="description"
        />

        {/* Price */}
        <FormLabel>Price</FormLabel>
        <TextField
          type="number"
          margin="normal"
          value={inputs.price}
          onChange={handleChange}
          fullWidth
          variant="outlined"
          name="price"
        />

        {/* available */}
        <FormLabel>Image</FormLabel>
        <TextField
          margin="normal"
          fullWidth
          value={inputs.image}
          onChange={handleChange}
          variant="outlined"
          name="image"
        />

        {/* Avaliable */}
        <FormControlLabel
          control={
            <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
          }
          label="Avaliable"
        />
        <Button variant="contained" type="submit">
          Add Book
        </Button>
      </Box>
    </form>
  );
};

export default AddBook;
