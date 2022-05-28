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
  padding: "10px 30px 10px 30px",
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
const mobileFooter = () => {
  return (
    <FooterBox sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AppbarContainer>
          <MyList type="column">
            <Typography
              variant="h6"
              sx={{ color: "#5f2c3e", display: "inline-block" }}
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
              >
                <ListItemText
                  primary={listItem.listText}
                  sx={{ marginBottom: "5px" }}
                />
              </Link>
            ))}
          </MyList>
        </AppbarContainer>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography sx={{ marginTop: "30px", marginBottom: "10px" }}>
            Follow Us On:
          </Typography>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              justifyContent: "space-between",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: "10px",
              }}
            >
              <FacebookIcon />
              <Typography variant="p" color="rgba(0, 0, 0, 0.6)">
                <a
                  href="https://www.facebook.com/profile.php?id=100053544300179"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Facebook
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                paddingBottom: "10px",
              }}
            >
              <TwitterIcon />
              <Typography variant="p" color="rgba(0, 0, 0, 0.6)">
                <a
                  href="https://www.facebook.com/profile.php?id=100053544300179"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  Twitter
                </a>
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
              }}
            >
              <LinkedInIcon />
              <Typography variant="p" color="rgba(0, 0, 0, 0.6)">
                <a
                  href="https://www.facebook.com/profile.php?id=100053544300179"
                  style={{
                    textDecoration: "none",
                    color: "rgba(0, 0, 0, 0.6)",
                  }}
                >
                  LinkedIn
                </a>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
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
          sx={{ marginBottom: "15px", width: "70%" }}
        />
      </Box>
    </FooterBox>
  );
};
export default mobileFooter;
