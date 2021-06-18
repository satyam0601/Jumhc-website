import React from 'react';
import { Carousel } from 'react-bootstrap';

function Slider()
{
 return(
   <div>
      <Carousel fade>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="img1.jpg"
          alt="First slide"
          height="550px"
        />
        <Carousel.Caption>
          <h1>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="img2.jpg"
          alt="Second slide"
          height="550px"
        />

        <Carousel.Caption>
          <h1>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="d-block w-100"
          src="img3.jpg"
          alt="Third slide"
          height="550px"
        />

        <Carousel.Caption>
          <h1>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h1>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </div>
 )
}
export default Slider;