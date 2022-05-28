import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  Typography,
  Box,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from "./blog";

import Pagination from "./Pagination";
const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(6);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  // Get current posts count
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // Change Page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Box sx={{ marginTop: "100px", padding: "0 50px" }} id="blogs">
      <Blog posts={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </Box>
  );
};
export default Blogs;
