import React from "react";
import './Card.css';

function Card(props)
{
    return(
        <div className="card">
            <img src={props.image}/>
            <div className="card-stats">
                <div className="stars">
                    <img src="images/star.png"/>
                    <span>{props.rating}</span>
                    <span>({props.reviewCount})</span>
                    <span>{props.country}</span>
                </div>
                <p>{props.title}</p>
                <p><b>From ${props.price} /</b> person</p>
            </div>
        </div>
    )
}
export default Card;