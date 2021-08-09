import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings'
import './Card.css'

export default function Card(props) {

    const [rating, setRating] = useState(props.rating);

    function changeRating(newRating,name) {
        setRating(newRating)
        updateRating(name,newRating)
    }

    function updateRating(id,rating) {
        props.updateRating(id,rating)
    }

    return (
        <div className="card">
            <Link to={props.button.link}>
                <h1>
                    {props.heading}
                    <img src={props.image} />
                </h1>
                <hr></hr>
                <h6>{props.subHeading}</h6>
                <p>{props.content}</p>
                <button>{props.button.label}</button>
            </Link>
            <StarRatings 
                rating={rating} 
                changeRating={changeRating}
                starDimension="20px"
                starSpacing="1px"
                starRatedColor="gold"
                name={`${props.id}`}
            />
        </div>
    )
}
