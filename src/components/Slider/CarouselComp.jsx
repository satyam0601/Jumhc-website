import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from './Images/day1.jpg';
import img2 from './Images/map.jpg';
import img3 from './Images/ropec.jpg';
import img4 from './Images/cmp.jpg';
function imageslider()
{
  return(
    <div>
      <Carousel>
        <Carousel.Item>
          <img src={img1} height="300px" width="300px" alt="img1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img2} height="300px" width="300px" alt="img1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} height="300px" width="300px" alt="img1" />
        </Carousel.Item>
        <Carousel.Item>
          <img src={img4} height="300px" width="300px" alt="img1" />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}
export default imageslider;