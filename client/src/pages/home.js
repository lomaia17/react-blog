import React from "react";
import DesktopHeader from "../components/desktopHeader";
import MobileHeader from "../components/mobileHeader";
import SingleBanner from "../components/singleBanner";
import Blogs from "../components/blogs";
import Footer from "../components/footer";
import useMediaQuery from "@mui/material/useMediaQuery";
import MobileFooter from "../components/mobileFooter";
function Home() {
  const matches = useMediaQuery("(max-width:991px)");
  const mobile = useMediaQuery("(max-width:420px)");
  return (
    <div>
      {matches ? <MobileHeader /> : <DesktopHeader />}
      <SingleBanner mobile={mobile} />
      <Blogs />
      {mobile ? <MobileFooter /> : <Footer />}
    </div>
  );
}

export default Home;
