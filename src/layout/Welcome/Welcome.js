import React from 'react';
import './Welcome.css';
import {Link} from 'react-router-dom';

const Welcome = () => {
    return (
        <div role="heading" className="heading">
            <h1>Welcome!</h1>
            <Link to="/artists">
                <img src="https://i.redd.it/1fmq843ih1o51.png"></img>
            </Link>
        </div>
    )
}

export default Welcome;