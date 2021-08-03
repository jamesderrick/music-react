import React, {useState} from 'react';

const LikeButton = () => {

    const [clicked, setClicked] = useState(false);

    const pressed = () => {
        if(clicked) {
            setClicked(false)
        } else {
            setClicked(true)
        }
    }

    return (
        <button className={clicked ? 'song-liked' : ''} onClick={pressed}>Like</button>
    )
}

export default LikeButton;