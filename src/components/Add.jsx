import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    img_url: "",
  });

  const inputHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const addData = () => {
    axios
      .post("http://localhost:3001/add", inputs)
      .then((res) => {
        alert("Blog added successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "90vh",
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "600px",
        }}
      >
        <TextField
          variant="outlined"
          placeholder="Title"
          onChange={inputHandler}
          name="title"
          value={inputs.title}
          fullWidth
        />
        <TextField
          variant="outlined"
          placeholder="Content"
          onChange={inputHandler}
          name="content"
          value={inputs.content}
          multiline
        />
        <TextField
          variant="outlined"
          placeholder="Image URL"
          onChange={inputHandler}
          name="img_url"
          value={inputs.img_url}
        />
        <Button variant="contained" color="secondary" onClick={addData}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default Add;