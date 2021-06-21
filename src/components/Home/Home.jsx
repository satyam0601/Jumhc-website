import React from "react";
import Slider from "./Slider/Slider";
import AboutUs from "./AboutUs/AboutUs";
import "./Home.css";
function Home() {
  return (
    <div className="home-page">
      {/* <Slider /> */}
      <div className="container">
        <AboutUs />
      </div>
    </div>
  );
}

export default Home;
