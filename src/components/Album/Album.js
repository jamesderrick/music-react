import React from 'react';
//import data from '../../data.json';
import Song from '../Song/Song';
import './Album.css';


const Album = (props) => {

    const renderSongs = (specificArtist, specificAlbum, data) => {
        const songsArray = [];
        //const artistData = data.find(element => element.artist === specificArtist)
        //const albumData = artistData.albums.find(element => element.title === specificAlbum)
        data.songs.forEach((song,index) => {
            songsArray.push(
            <li key={index}>
                <Song title={song.title} liked={song.liked} artist={specificArtist} album={specificAlbum} changeLike={props.changeLike}/>
            </li>
            )
        })
        return songsArray
    }

    return (
        <ol>
            {renderSongs(props.artist, props.album, props.data)}
        </ol>
    )
}

export default Album;