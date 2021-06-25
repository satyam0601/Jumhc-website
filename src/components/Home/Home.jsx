import React from "react";
import AboutUs from "./AboutUs/AboutUs";
import ContentContainer from "../Common/ContentContainer/ContentContainer.jsx";
import Slider from "./Slider/Slider";
import OutdoorIndoor from "./OutdoorIndoor/OutdoorIndoor";
function Home() {
  return (
    <>
      <Slider />
      <ContentContainer>
        <AboutUs />
        <OutdoorIndoor />
      </ContentContainer>
    </>
  );
}

export default Home;
