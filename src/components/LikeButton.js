import React, {useState} from 'react';

const LikeButton = (props) => {

    return (
        <button className={props.isLiked ? 'song-liked' : ''} onClick={() => props.updateLike()}>
                {props.isLiked ? 'Unlike' : 'Like'}
        </button>
    )
}

export default LikeButton;