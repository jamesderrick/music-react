import React, {useState, useEffect} from 'react';
import axios from 'axios';
import LikeButton from '../LikeButton/LikeButton';
import './Song.css';

const Song = (props) => {

    const [songLiked, setSongLiked] = useState(props.liked);
    const [count, setCount] = useState(0);

    // const handleLike = () => {
    //     setSongLiked(!songLiked)

    //     const updateLike = async () => {
    //         console.log(songLiked)
    //         try {
    //             const { data } = await axios.post('https://react-music-demo.herokuapp.com/', {
    //                 status: songLiked,
    //                 artist: props.artist,
    //                 album: props.album,
    //                 song: props.title
    //             })
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     updateLike()
    // }

    return (
        <div className="song">
            {props.title}
            <LikeButton isLiked={props.liked} changeLike={props.changeLike} artist={props.artist} album={props.album} song={props.title}/>
        </div>
    )
}

export default Song;