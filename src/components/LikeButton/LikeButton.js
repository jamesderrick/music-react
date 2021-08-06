import React from 'react';
import './LikeButton.css';

const LikeButton = (props) => {

    function toggleStatus() {
        props.toggleIsLiked()
    }

    return (
        <button className={props.isLiked ? 'like-button song-liked' : 'like-button'} onClick={toggleStatus}>
                {props.isLiked ? 'Unlike' : 'Like'}
        </button>
    )
}

export default LikeButton;