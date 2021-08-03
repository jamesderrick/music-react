import React from 'react';
import Album from './Album';
import data from '../data.json';

const renderAlbums = (specificArtist) => {
    const albums = []
    const artist = data.find(element => element.artist === specificArtist)
    artist.albums.forEach((album,index) => {
        albums.push(
        <li className="album" key={index}>
            <h2>{album.title} ({album.year})</h2> 
            <img src={album.artwork}></img>
            <Album artist={specificArtist} album={album.title}/>
        </li>
        )
    })
    return albums
}

const Artist = (props) => {
    return (
        <>
            <h1>Artist: {props.name}</h1>
            <h6>Genre: {props.genre}</h6>
            <p>Intro: {props.intro}</p>
            <ul>
                {renderAlbums(props.name)}
            </ul>
        </>
    )
}

export default Artist;