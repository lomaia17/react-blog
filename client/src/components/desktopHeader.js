import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Grid,
  Typography,
  Badge,
  Avatar,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import avatar from "../imgs/avatar1.jpg";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import axios from "axios";

const listItems = [
  {
    listText: "Home",
    textPath: "/",
  },
  {
    listText: "Create Post",
    textPath: "/createPost",
  },
];
const MyList = styled(List)(({ type }) => ({
  display: type === "row" ? "flex" : "block",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));
const AppbarHeader = styled(Typography)(() => ({
  padding: "0px 50px",
  flexGrow: 1,
  fontSize: "1.5em",
  color: "#5f2c3e",
}));
const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "2px 8px",
  boxShadow: "0px 1px 10px 0px rgb(0 0 0 / 10%)",
}));
const StyledBadge = styled(Badge)(() => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      content: '""',
    },
  },
}));

const DesktopHeader = () => {
  const [posts, setPosts] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };
  const SearchResults = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          backgroundColor: "white",
          zIndex: 999,
          width: "100%",
        }}
      >
        <Typography
          variant="h6"
          sx={{ paddingTop: "20px", paddingLeft: "50px" }}
        >
          Search Results:
        </Typography>
        <div
          style={{
            height: "350px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          {posts
            .filter((post) => {
              if (searchTitle == "") {
                return post;
              } else if (
                post.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                return post;
              }
            })
            .map((post, index) => {
              return (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0px 50px",
                  }}
                >
                  <Card sx={{ maxWidth: "100%" }}>
                    <CardActionArea href={`post/${post._id}`}>
                      <CardMedia
                        sx={{ height: "120px" }}
                        image={post.img}
                        title="Contemplative Reptile"
                      />

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="textSecondary"
                          component="p"
                        >
                          {post.desc}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    <CardActions
                      sx={{
                        display: "flex",
                        margin: "0",
                        justifyContent: "space-between",
                      }}
                    ></CardActions>
                  </Card>
                </Box>
              );
            })}
        </div>
      </Box>
    );
  };
  return (
    <Box>
      <AppbarContainer>
        <Link
          to={"/"}
          style={{ display: "flex", flexGrow: "1", textDecoration: "none" }}
        >
          <AppbarHeader variant="h2">Tech Blog</AppbarHeader>
        </Link>
        <Box
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search..."
            inputProps={{ "aria-label": "search" }}
            onChange={handleChange}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Box>
        <MyList type="row" sx={{ flexGrow: "0" }}>
          {listItems.map((listItem, index) => (
            <Link
              to={listItem.textPath}
              style={{ textDecoration: "none", color: "black" }}
            >
              <ListItemText
                primary={listItem.listText}
                key={index}
                sx={{ marginRight: "50px" }}
              />
            </Link>
          ))}

          <StyledBadge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            sx={{ marginRight: "30px" }}
          >
            <Avatar alt="User" />
          </StyledBadge>
        </MyList>
      </AppbarContainer>
      {searchTitle != "" && <SearchResults />}
    </Box>
  );
};

export default DesktopHeader;
