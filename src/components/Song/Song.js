import React, { useState } from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './Song.css';

import axios from 'axios';

const Song = (props) => {

    const [isLiked, setIsLiked] = useState(props.liked);

    const handleLike = () => {
        setIsLiked(prev => !prev)
        props.handleLikeButtonClick(props.url,!isLiked)
    }

    return (
        <div className="song">
            {props.trackName}
            <LikeButton isLiked={isLiked} toggleIsLiked={handleLike}/>
        </div>
    )
}

export default Song;