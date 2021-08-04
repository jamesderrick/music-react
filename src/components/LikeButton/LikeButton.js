import React, {useState} from 'react';
import './LikeButton.css';

const LikeButton = (props) => {

    function changeLike() {
        props.changeLike(props.artist,props.album,props.song,!props.isLiked)
    }

    return (
        <button className={props.isLiked ? 'song-liked' : ''} onClick={changeLike}>
                {props.isLiked ? 'Unlike' : 'Like'}
        </button>
    )
}

export default LikeButton;