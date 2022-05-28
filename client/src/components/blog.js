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

const Blog = ({ posts }) => {
  return (
    <Grid container spacing={3}>
      {posts.map((post, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ maxWidth: "100%" }}>
            <CardActionArea href={`post/${post._id}`}>
              <CardMedia
                sx={{ height: "240px" }}
                image={post.img}
                title="Contemplative Reptile"
              />

              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {`${post.desc.slice(0, 100)}...`}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions
              sx={{
                display: "flex",
                margin: "0",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    {post.username}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    {post.createdAt.slice(0, 10)}
                  </Typography>
                </Box>
              </Box>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Blog;
