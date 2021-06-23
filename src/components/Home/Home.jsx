import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import ContentContainer from "../Common/ContentContainer/ContentContainer.jsx";
import Slider from "./Slider/Slider";
function Home() {
  return (
    <>
      <Slider />
      <ContentContainer>
        <AboutUs />
      </ContentContainer>
    </>
  );
}

export default Home;
