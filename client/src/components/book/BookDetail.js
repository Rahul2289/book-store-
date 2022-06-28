import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Box,
  TextField,
  FormLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
const BookDetail = () => {
  const [inputs, setInputs] = useState({});
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  const id = useParams().id;

  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`/api/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`/api/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
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
              <Checkbox
                checked={checked}
                onChange={() => setChecked(!checked)}
              />
            }
            label="Avaliable"
          />
          <Button variant="contained" type="submit">
            Update Book
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default BookDetail;
