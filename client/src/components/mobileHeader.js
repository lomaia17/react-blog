import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Avatar,
  Box,
  Divider,
  IconButton,
  List,
  Badge,
  ListItem,
  ListItemText,
  Drawer,
  Typography,
  Grid,
  Button,
  CardMedia,
  CardContent,
  CardActions,
  Card,
  CardActionArea,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import avatar from "../imgs/avatar1.jpg";
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
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

const MobileHeader = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const handleChange = (e) => {
    setSearchTitle(e.target.value);
  };
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:5000/api/posts");
      setPosts(res.data);
    };
    fetchPosts();
  }, []);
  const [searchTitle, setSearchTitle] = useState("");
  const toggleSlider = () => {
    setOpen(!open);
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
            height: "200px",
            paddingLeft: "50px",
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
                <div style={{ marginTop: "20px" }}>
                  <Link
                    key={index}
                    to={`/post/${post._id}`}
                    style={{
                      textDecoration: "none",
                      color: "black",
                      marginBottom: "20px",
                    }}
                  >
                    {post.title}
                  </Link>
                </div>
              );
            })}
        </div>
      </Box>
    );
  };
  const sideList = () => (
    <Box component="div" sx={{ width: "240px" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          sx={{ margin: "10px 5px" }}
        >
          <Avatar alt="User" src={avatar} />
        </StyledBadge>
        <Typography>Giorgi Lomaia</Typography>
      </Box>

      <Divider sx={{ paddingBottom: "10px" }} />
      <List>
        {listItems.map((listItem, index) => (
          <Link
            to={listItem.textPath}
            key={index}
            style={{
              textDecoration: "none",
              color: "black",
            }}
          >
            <ListItemText
              primary={listItem.listText}
              sx={{ marginLeft: "15px", marginBottom: "10px" }}
            />
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box component="nav" sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          sx={{ backgroundColor: "white", color: "black" }}
        >
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <MenuIcon />
            </IconButton>
            <Typography component="div" sx={{ flexGrow: 1 }}>
              <Link
                to={"/"}
                style={{
                  textDecoration: "none",
                  fontSize: "18px",
                  color: "black",
                }}
              >
                Tech Blog
              </Link>
            </Typography>

            <Drawer open={open} anchor="right" onClose={toggleSlider}>
              {sideList()}
            </Drawer>
            <Box
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: 150,
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
          </Toolbar>
        </AppBar>
        {searchTitle != "" && <SearchResults />}
      </Box>
    </>
  );
};

export default MobileHeader;
