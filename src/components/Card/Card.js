import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css'

export default function Card(props) {
    return (
        <div className="card">
            <h1>{props.heading}</h1>
            <hr></hr>
            <h6>{props.subHeading}</h6>
            <p>{props.content}</p>
            <Link to={props.button.link}>
                <button>{props.button.label}</button>
            </Link>
        </div>
    )
}
