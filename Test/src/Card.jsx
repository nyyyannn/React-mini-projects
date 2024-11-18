import React from "react";
import './Card.css';

function Card()
{
    return(
        <div className="card">
            <img src="images/katie.jpeg"/>
            <div className="card-stats">
                <div className="stars">
                    <img src="images/star.png"/>
                    <span>5.0</span>
                    <span>(6)</span>
                    <span>USA</span>
                </div>
                <p>Life Lessons with Katie Zaferes</p>
                <p><b>From $136 /</b> person</p>
            </div>
        </div>
    )
}
export default Card;