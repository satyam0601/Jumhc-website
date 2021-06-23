import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import ContentContainer from "../Common/ContentContainer/ContentContainer.jsx";
import Slider from "./Slider/Slider";
import "./Home.css";
function Home() {
  return (
    <ContentContainer>
      <Slider />
      <AboutUs />
    </ContentContainer>
  );
}

export default Home;
