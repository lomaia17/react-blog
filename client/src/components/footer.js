import React from "react";
import { Box, List, ListItemText, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";
const FooterBox = styled(Box)(() => ({
  borderTop: "1px solid #d5d8db",
  marginTop: "100px",
  paddingTop: "50px",
  paddingLeft: "50px",
  paddingRight: "50px",
  display: "flex",
  justifyContent: "space-between",
}));
const MyList = styled(List)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "flexEnd",
  alignItems: "flexEnd",
  cursor: "pointer",
}));
const AppbarContainer = styled(Box)(() => ({
  display: "flex",
  marginTop: 4,
  justifyContent: "center",
  alignItems: "center",
  width: "100px",
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
const Footer = () => {
  return (
    <FooterBox>
      <AppbarContainer>
        <MyList type="column">
          <Typography
            variant="h6"
            sx={{
              color: "#5f2c3e",
              display: "inline-block",
              marginBottom: "5px",
            }}
          >
            Tech Blog
          </Typography>
          {listItems.map((listItem, index) => (
            <Link
              to={listItem.textPath}
              key={index}
              style={{
                textDecoration: "none",
                color: "rgba(0, 0, 0, 0.6)",
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <ListItemText
                primary={listItem.listText}
                sx={{ marginBottom: "5px" }}
              />
            </Link>
          ))}
        </MyList>
      </AppbarContainer>
      <Typography variant="h2" sx={{ color: "#F3F3F3", fontSize: "160px" }}>
        GL.
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h6" sx={{ marginBottom: "15px" }}>
          Receive latest blogs
        </Typography>
        <TextField
          id="outlined-basic"
          label="Enter your email"
          variant="outlined"
          size="small"
          sx={{ marginBottom: "15px" }}
        />
        <Typography sx={{ marginBottom: "10px" }}>Follow Us On:</Typography>
        <Box
          sx={{
            display: "flex",
            width: "50%",
            justifyContent: "space-between",
          }}
        >
          <a
            href="https://www.facebook.com/profile.php?id=100053544300179"
            style={{ color: "black" }}
          >
            <FacebookIcon />
          </a>
          <a href="https://twitter.com/GiorgiLomaia" style={{ color: "black" }}>
            <TwitterIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/giorgilomaia/"
            style={{ color: "black" }}
          >
            <LinkedInIcon />
          </a>
        </Box>
      </Box>
    </FooterBox>
  );
};
export default Footer;
