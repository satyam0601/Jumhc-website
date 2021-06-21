import React from 'react';
import './Expedition.css';
import Card from './Card';

function Expedition()
{
  return (
    <div className="container">
       {/* <Slider /> */}
        <h1 className="slider">this is expedition slider</h1>
      
     
         <div className="sp">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text every
              since the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not only 
              five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in the 1960s with 
              the release of Letraset sheets containing Lorem Ipsum passages, and more
              recently with desktop publishing software like Aldus PageMaker including 
              versions of Lorem Ipsum.
            </p>
          </div>
          <div className="card_container ">
            <Card 
            imgsrc="rope.jpg"
            title="expedition image 2019"
            imgname="base_camp1"
            link="blog_link"
            />
            <Card
            imgsrc="map.jpg"
            title="expedition image 2019"
            imgname="base_camp1"
            link="blog_link"
            />
          </div>
     </div>
  
  );
}
export default Expedition;