<<<<<<< HEAD
import React from 'react';
import './AboutUs.css';
import { Navbar, Nav } from "react-bootstrap";

function AboutUs()
{
  return(
   <>
      <div className="home_aboutus">
        <br/><br/>
         <h1 className="heading">WHAT IS JUMHC ?  </h1>
           <div className="para">
             <p>This is one of the oldest student run Mountaineering and Hiking Club in India,      
                Jadavpur University Mountaineering and Hiking Club (JUMHC)</p>  
                <p>is one of the official club and societies of Jadavpur University. Founded in 1966 under the initiative of *******************and associates . . . . .</p>                                            
              <p>Our two major events are <strong>RCC</strong> and <strong>Expedition</strong></p>
            </div>
            <button>read more</button>
       </div>
     
   </>
=======
import React from "react";
import "./AboutUs.css";
import Button from "../../Common/Button/Button";

function AboutUs() {
  return (
    <>
      <div className="container">
        <div className="about-us">
          <h1 className="heading">WHAT IS JUMHC ? </h1>

          <div className="sp">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
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
      </div>
    </>
>>>>>>> 170054472962fe15d33b1ac538275ad1b9bbf0a7
  );
}
export default AboutUs;
