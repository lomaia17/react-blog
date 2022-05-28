import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router";
import axios from "axios";
const Post = () => {
  const url = useLocation();
  const path = url.pathname.split("/")[2];
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(false);
  const getPost = async () => {
    setLoading(true);
    const res = await axios.get("/posts/" + path);
    setPost(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getPost();
  }, [path]);
  console.log(post);
  return (
    <div style={{ flex: 9 }}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Box
          sx={{
            margin: "20px",
            paddingRight: "0",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <img
            src={post.img}
            alt="blog img"
            style={{
              width: "100%",
              height: "280px",
              objectFit: "cover",
              borderRadius: "7px",
              marginTop: "20px",
            }}
          />
          <Typography
            variant="h4"
            style={{ marginTop: "20px", textAlign: "center" }}
          >
            {post.title}
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="p"
              style={{ fontSize: "18px", marginBottom: "20px" }}
            >
              Author :{" "}
              <span style={{ fontWeight: "bold" }}>{post.username}</span>
            </Typography>
            <Typography
              variant="p"
              style={{ fontSize: "18px", marginBottom: "20px" }}
            >
              Created :
              <span style={{ fontWeight: "bold" }}>
                {post.createdAt && post.createdAt.slice(0, 10)}
              </span>
            </Typography>
          </Box>

          <Typography variant="p" style={{ fontSize: "16px" }}>
            {post.desc}
          </Typography>
        </Box>
      )}
    </div>
  );
};

export default Post;
