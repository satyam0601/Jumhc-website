import React from "react";
import "./AboutUs.css";
import Button from "../../Common/Button/Button";

function AboutUs() {
  return (
    <>
      <div className="about-us">
        <h1 className="heading">WHAT IS JUMHC ? </h1>

        <div className="sp">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>

          <p className="sp">
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum
          </p>

          <p className="sp">
            Our two major events are <strong className="rcc">RCC</strong> and{" "}
            <strong className="rcc">Expedition</strong>
          </p>
        </div>
        <Button href="#about-us">Read More</Button>
      </div>
    </>
  );
}
export default AboutUs;
