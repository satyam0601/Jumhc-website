import React  from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Component, useState } from 'react';
import Image from 'react-bootstrap/Image';

const CarouselComp =()=>{
 return(
   <Carousel fade={true}>
     <Carousel.Item interval={2000}>
       <img
       className="d-block w-100"
       src="day1.jpg"
       alt="first slde"
       height="550px"
       />
       <Carousel.Caption>
         <h2>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h2>
         <p>THIS IS THE FIRST SLIDE</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
       <img
       className="d-block w-100"
       src="cpm.jpg"
       alt="first slde"
       height="550px"
       />
       <Carousel.Caption>
         <div>
         <h2>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h2>
         </div>
         <p>THIS IS THE FIRST SLIDE</p>
       </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
       <img
       className="d-block w-100"
       src="map.jpg"
       alt="first slde"
       height="550px"
       />
       <Carousel.Caption>
         <h2>JADAVPUR UNIVERSITY MOUNTAINEERING AND HIKING CLUB</h2>
         <p>THIS IS THE FIRST SLIDE</p>
       </Carousel.Caption>
      </Carousel.Item>
   </Carousel>
 )
}
export default CarouselComp;