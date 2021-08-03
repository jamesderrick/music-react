import React from 'react';
import data from '../data.json';
import Song from './Song';

const renderSongs = (specificArtist, specificAlbum) => {
    const songsArray = [];
    const artistData = data.find(element => element.artist === specificArtist)
    const albumData = artistData.albums.find(element => element.title === specificAlbum)
    albumData.songs.forEach((song,index) => {
        songsArray.push(
        <li key={index}>
            <Song title={song.title}/>
        </li>
        )
    })
    return songsArray
}


const Album = (props) => {
    return (
        <ol>
            {renderSongs(props.artist, props.album)}
        </ol>
    )
}

export default Album;