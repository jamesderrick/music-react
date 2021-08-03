import React, {useState} from 'react';
import './LikeButton.css';

const LikeButton = (props) => {

    return (
        <button className={props.isLiked ? 'song-liked' : ''} onClick={() => props.updateLike()}>
                {props.isLiked ? 'Unlike' : 'Like'}
        </button>
    )
}

export default LikeButton;