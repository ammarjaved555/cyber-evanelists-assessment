import React from "react";
import NavBar from "../atoms/navBar/NavBar";
import Banner from "../atoms/banner/Banner";
import Study from "../atoms/study/Study";
import Footer from "../atoms/footer/Footer";
import Slide from "../atoms/slider/Slider";

const CaseStudy = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <Study />
      <Slide />
      <Footer />
    </>
  );
};

export default CaseStudy;
