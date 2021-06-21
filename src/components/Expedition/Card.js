import React from 'react';
import Button from '../Common/Button/Button';

function Card(props)
{
  return(
    <div className="Cards">
      <div className="card">
        <img src={props.imgsec} alt="image"/>
        <div className="card_info">
          <span className="card_title">{props.title}</span>
          <h2 className="card_name">{props.name}</h2>
          <a href={props.imagelink} target="_blank">
          <Button>Read More</Button>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;