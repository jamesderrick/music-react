import React from 'react';
import Album from '../Album/Album';
import data from '../../data.json';
import './Artist.css'

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
            <h1><span>Artist: </span>{props.name}</h1>
            <h6><span>Genre: </span>{props.genre}</h6>
            <p><span>Introduction: </span>{props.intro}</p>
            <ul>
                {renderAlbums(props.name)}
            </ul>
        </>
    )
}

export default Artist;