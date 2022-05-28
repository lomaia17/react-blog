import React from "react";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import BackgroundImage from "../imgs/background-image.jpg";
import BackgroundImage2 from "../imgs/background-image2.jpg";
import SimpleImageSlider from "react-simple-image-slider";
const images = [{ url: BackgroundImage }, { url: BackgroundImage2 }];

const ImageParagraph = styled(Typography)(() => ({
  position: "absolute",
  zIndex: "1",
  color: "white",
  top: "46%",
  left: "35%",
  fontSize: "30px",
}));

const ImageParagraphMob = styled(Typography)(() => ({
  position: "absolute",
  zIndex: "1",
  color: "white",
  top: "150px",
  fontSize: "30px",
  textAlign: "center",
  padding: "0px 10px",
}));

const singleBanner = ({ mobile }) => {
  return (
    <div>
      {mobile ? (
        <ImageParagraphMob>Giorgi Lomaia's Personal Blog</ImageParagraphMob>
      ) : (
        <ImageParagraph>Giorgi Lomaia's Personal Blog</ImageParagraph>
      )}

      <SimpleImageSlider
        width={"100%"}
        height={mobile ? 300 : 500}
        images={images}
        showBullets={true}
        showNavs={!mobile ? true : false}
        navSize={30}
        autoPlay={true}
        loop={true}
        slideDuration={1}
        autoPlayDelay={3}
        style={{
          filter: "brightness(50%)",
        }}
      />
    </div>
  );
};

export default singleBanner;
