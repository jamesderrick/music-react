import React from 'react';
import LikeButton from './LikeButton';

const Song = (props) => {

    return (
        <div>
            {props.title}
            <LikeButton />
        </div>
    )
}

export default Song;