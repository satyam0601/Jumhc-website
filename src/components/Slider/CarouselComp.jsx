import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function imageslider()
{
  return(
    <div>
      <Carousel interval="2000">
        
        <Carousel.Item >
          <img className="img" src="day1.png.jpg" height="400px" width="100%" alt="img1"/>
          <h2 className="text">First Day Of RCC</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img"  src="rope.png.jpg" height="400px" width="100%" alt="img2"/>
          <h2 className="text">Rope Class</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src="map.png.jpg" height="400px" width="100%" alt="img3"/>
          <h2 className="text">Map Class</h2>
        </Carousel.Item>
        <Carousel.Item>
          <img className="img" src="cpm.png.jpg" height="400px" width="100%" alt="img4" />
          <h2 className="text">Camp Fire</h2>
        </Carousel.Item>
        
      </Carousel>
    </div>
  )
}
export default imageslider;