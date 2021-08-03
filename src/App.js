import React from 'react';
import Artist from './components/Artist/Artist';
import data from './data.json';
import './style.css';

const artists = [];

const renderArtist = () => {
    data.forEach((artist,index) => {
        artists.push(<div className="artist" key={index}>
        <Artist
            name={artist.artist}
            genre={artist.genre}
            intro={artist.intro}
        />
        <hr></hr>
        </div>)
    })

    return (
        artists
    )
}

const App = () => {
    return (
        <>
        {renderArtist()}
        </>
    )
};

export default App;