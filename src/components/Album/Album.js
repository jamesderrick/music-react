import React from 'react';
import Song from '../Song/Song';
import './Album.css';


const Album = (props) => {

    const renderSongs = (songs) => {
        const songsArray = [];

        songs.forEach((song,index) => {
            songsArray.push(
            <li key={index}>
                <Song 
                    trackName={song.title} 
                    liked={song.liked} 
                    url={`${props.url}/${song.title}`}
                    handleLikeButtonClick={props.handleLikeButtonClick}
                />
            </li>
            )
        })
        return songsArray
    }

    return (
        <>
        <h2>{props.title} ({props.year})</h2>
        <img src={props.artwork}></img>
        <ol>
            {renderSongs(props.songs)}
        </ol>
        </>
    )
}

export default Album;