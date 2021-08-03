import React from 'react';
import Header from './layout/Header/Header';
import Artist from './components/Artist/Artist';
import Footer from './layout/Footer/Footer';
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
        <Header />
        {renderArtist()}
        <Footer />
        </>
    )
};

export default App;