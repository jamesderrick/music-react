import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card(props) {
    return (
        <div className="card">
            <Link to={props.button.link}>
                <h1>
                    {props.heading}
                    {console.log(props.image)}
                    <img src={props.image} />
                </h1>
                <hr></hr>
                <h6>{props.subHeading}</h6>
                <p>{props.content}</p>
                <button>{props.button.label}</button>
            </Link>
        </div>
    )
}
