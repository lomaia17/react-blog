import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import axios from "axios";
const postForm = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [img, setImg] = useState("");
  const publishPost = async (e) => {
    e.preventDefault();
    const newPost = {
      username: "Giorgi Lomaia",
      title,
      desc,
      img,
    };
    try {
      const res = await axios.post("http://localhost:5000/api/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form onSubmit={publishPost}>
      <Box sx={{ padding: "50px", display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <TextField
            id="standard-basic"
            label="Title"
            variant="standard"
            sx={{ paddingBottom: "50px", marginRight: "100px", width: "300px" }}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            id="standard-basic"
            label="Image Url"
            variant="standard"
            onChange={(e) => setImg(e.target.value)}
          />
        </Box>

        <TextField
          id="filled-multiline-flexible"
          label="Tell your story..."
          multiline
          maxRows={10}
          sx={{ maxWidth: "700px" }}
          onChange={(e) => setDesc(e.target.value)}
        />
        <Button
          variant="contained"
          sx={{ marginTop: "50px", padding: "5px 70px", width: "60px" }}
          type="submit"
        >
          Publish
        </Button>
      </Box>
    </form>
  );
};

export default postForm;
