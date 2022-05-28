import React, { useEffect, useState } from "react";
import DesktopHeader from "../components/desktopHeader";
import MobileHeader from "../components/mobileHeader";
import Post from "../components/post";
import Footer from "../components/footer";
import SideBar from "../components/sideBar";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFooter from "../components/mobileFooter";
import { Box } from "@mui/material";
import { useLocation } from "react-router";
import axios from "axios";
const singlePost = () => {
  const matches = useMediaQuery("(max-width:991px)");
  const mobile = useMediaQuery("(max-width:420px)");
  return (
    <div>
      {matches ? <MobileHeader /> : <DesktopHeader />}
      <Box sx={{ display: "flex" }}>
        <Post />
        {!mobile && <SideBar />}
      </Box>

      {mobile ? <MobileFooter /> : <Footer />}
    </div>
  );
};

export default singlePost;
