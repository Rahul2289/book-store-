import React from "react";
import { AppBar, Typography, Toolbar } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "black" }} position="static">
      <Toolbar>
        <Typography>
          <LibraryBooksOutlinedIcon />
        </Typography>
        <div
          style={{
            marginLeft: "auto",
            display: "flex",
            columnGap: "2px",
          }}
        >
          <p>
            <Link to="/add" style={{ textDecoration: "none", color: "white" }}>
              Add Product
            </Link>
          </p>

          <p>
            <Link
              to="/books"
              style={{
                textDecoration: "none",
                color: "white",
                marginLeft: "1rem",
              }}
            >
              Books
            </Link>
          </p>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
