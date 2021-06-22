import React from 'react';
import Button from '../Common/Button/Button';
import './Card.css';
function Card(props)
{
  return(
    <div className="Cards">
      <div className="card">
        <img src={props.imgsec} alt="image"/>
        <div className="card_info">
          <h2 className="card_name">{props.name}</h2>
          <a className="buttonc" href={props.bloglink} target="_blank">
          <Button>Read More</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;