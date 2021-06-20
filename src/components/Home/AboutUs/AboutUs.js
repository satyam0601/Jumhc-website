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
  );
}
export default AboutUs;