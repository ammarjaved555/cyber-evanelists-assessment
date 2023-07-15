import React, { useState, useRef } from "react";
import case1 from "../../../assets/case1.png";
import case2 from "../../../assets/case2.png";
import case3 from "../../../assets/case3.png";
import case4 from "../../../assets/case4.png";
import case5 from "../../../assets/case5.png";
import case6 from "../../../assets/case6.png";
import case7 from "../../../assets/case7.png";
import case8 from "../../../assets/case8.png";
import case9 from "../../../assets/case9.png";
import case10 from "../../../assets/case10.png";

import { Typography, styled, Box, Button } from "@mui/material";

const CaseStudyContainer = styled(Box)`
  display: grid;

  grid-template-rows: repeat(3, 1.5fr);
  margin-top: 300px;

  margin-right: 60px;
  & > div {
    height: 410px;
    &:hover > div {
      background-color: rgb(25, 118, 210);
    }
    &:hover > button {
      background-color: rgb(25, 118, 210);
      color: white;
    }
    // display: flex;
    // flex-direction: column;
    // justify-content: space-evenly;
  }
`;
const HeadingStudy = styled(Typography)`
  position: relative;
  width: 90%;
  color: black;
  font-family: Roboto Slab;
  font-weight: bolder;
`;
const ParagraphStudy = styled(Typography)`
  margin-top: 25px;
  color: gray;
  font-size: medium;
  width: 90%;
`;
const ImageStudy = styled("img")({
  margin: "3rem 2rem",
  width: "130px",
  height: "60px",
});
const BoxParagraph = styled(Typography)`
  position: static;
  margin-left: 2rem;
  margin-buttom: 100px
  color: gray;
  font-size: 15px;
  width: 220px;
  height: 100px
`;
const ButtonStudy = styled(Button)`
  margin: 4rem 2rem;
  border-radius: 20px;
  width: 210px;
  padding: 10px;
  background-color: transparent;
  color: navy;
  border: 1px solid navy;
  shadow: none;
  &:hover {
    border: navy;
    color: white;
  }
  &:focus {
    border: navy;
  }
`;
const HoverBox = styled(Box)`
  position: relative;
  bottom: 35px;
  width: 100%;
  height: 10px;
`;
const Study = () => {
  return (
    <CaseStudyContainer
      sx={{
        gridTemplateColumns: {
          xs: "repeat(1, 400px)",
          sm: "repeat(1, 500px)",
          md: "repeat(2, 400px)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
        },
        marginLeft: {
          xs: "20px",
          sm: "60px",
          md: "60px",
          lg: "60px",
          xl: "60px",
        },
      }}
    >
      <Box
        sx={{
          gridColumn: { xs: "1", sm: "1", md: "1/3", lg: "1/3", xl: "1/3" },
          justifyContent: "space-evenly",
        }}
      >
        <HeadingStudy
          variant="h3"
          component="h2"
          sx={{
            fontSize: {
              xs: "medium",
              sm: "medium",
              md: "x-large",
              lg: "xx-large",
              xl: "xx-large",
            },
            width: {
              xs: "250px",
              sm: "350px",
              md: "600px",
              lg: "800px",
              xl: "1000px",
            },
          }}
        >
          Creating value for your business
        </HeadingStudy>
        <ParagraphStudy
          variant="h6"
          component="h5"
          sx={{
            fontSize: {
              xs: "small",
              sm: "small",
              md: "medium",
              lg: "large",
              xl: "large",
            },
            width: {
              xs: "200px",
              sm: "250px",
              md: "600px",
              lg: "600px",
              xl: "600px",
            },
          }}
        >
          We believe in the possibility of what can be. Our experts have been
          providing solutions over the last decade that have helped businesses
          like yours expand at a rapid scale.
        </ParagraphStudy>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case1}></ImageStudy>
        <BoxParagraph>
          Educating over 30 million learners worldwide.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case2}></ImageStudy>
        <BoxParagraph>
          With zero downtime, we have expanded six continents.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case3}></ImageStudy>
        <BoxParagraph>
          Developing an award-winning app that helped the company expand into
          Europe & North America.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case4}></ImageStudy>
        <BoxParagraph>
          Building the world’s leading travel search engine from scratch
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case5}></ImageStudy>
        <BoxParagraph>
          Reducing crawl time from 168 hours to 4 hours to save millions in
          revenue.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case6}></ImageStudy>
        <BoxParagraph>
          From a startup to an industry award winning app, to create an app that
          accurately predicts the parking behaviour of drivers.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case7}></ImageStudy>
        <BoxParagraph>
          Arbisoft and Philanthropy University partnered to create a learning
          platform that transforms the impact of local organizations.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case8}></ImageStudy>
        <BoxParagraph>
          Our collaboration with Sastaticket.pk helped them achieve significant
          growth and successfully raise USD 1.5 M for the platform.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case9}></ImageStudy>
        <BoxParagraph>
          Over a million teachers throughout the USA trust TenMarks for
          providing independent and classroom learning in more than 85% of
          school districts.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
      <Box sx={{ border: "1px solid gray" }}>
        <ImageStudy src={case10}></ImageStudy>
        <BoxParagraph>
          Arbisoft helped Twinner simplify and streamline its virtual car
          showroom platform, enabling its successful entry into the German B2C
          market.
        </BoxParagraph>
        <ButtonStudy variant="contained">View case study</ButtonStudy>
        <HoverBox></HoverBox>
      </Box>
    </CaseStudyContainer>
  );
};

export default Study;
