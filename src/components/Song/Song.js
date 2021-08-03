import React, {useState} from 'react';
import LikeButton from '../LikeButton/LikeButton';
import './Song.css';

const Song = (props) => {

    const [songLiked, setSongLiked] = useState(false);

    const handleLike = () => {
        setSongLiked(!songLiked)
    }

    return (
        <div className="song">
            {props.title}
            <LikeButton isLiked={songLiked} updateLike={handleLike}/>
        </div>
    )
}

export default Song;