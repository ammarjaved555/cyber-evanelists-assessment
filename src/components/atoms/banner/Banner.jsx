import React from "react";
import banner from "../../../assets/banner.png";
import { Typography, styled, Box } from "@mui/material";
const ImageBanner = styled("img")({
  position: "absolute",
  width: "100%",
  height: "90%",
  left: 0,
  top: 0,
});
const HeadingBanner = styled(Typography)`
  z-index: 100;
  position: relative;
  width: fit-content;

  margin-top: 200px;
  color: white;
  font-family: Roboto Slab;
  font-weight: bolder;
`;
const ParagraphBanner = styled(Typography)`
  z-index: 100;
  position: relative;
  width: fit-content;
  margin-left: 60px;
  top: 30px;
  color: white;
  font-family: Nunito, sans-serif;
`;

const Banner = () => {
  return (
    <Box>
      <ImageBanner
        src={banner}
        sx={{
          height: { xs: "60%", sm: "60%", md: "80%", bg: "90%" },
        }}
      ></ImageBanner>
      <HeadingBanner
        variant="h2"
        component="h2"
        sx={{
          fontSize: { xs: 25, sm: 30, md: 40, bg: 50 },
          marginLeft: { xs: "20px", sm: "20px", md: "60px", bg: "60px" },
        }}
      >
        Creating change for the better
      </HeadingBanner>
      <ParagraphBanner
        variant="h5"
        component="h4"
        sx={{
          fontSize: { xs: 15, sm: 18, md: 25, bg: 30 },
          marginLeft: { xs: "20px", sm: "20px", md: "60px", bg: "60px" },
        }}
      >
        Explore how we empower businesses that change the world.
      </ParagraphBanner>
    </Box>
  );
};

export default Banner;
