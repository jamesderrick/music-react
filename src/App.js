import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './layout/Header/Header';
import Welcome from './layout/Welcome/Welcome';
import Artist from './components/Artist/Artist';
import About from './layout/About/About';
import NotFound from './layout/NotFound/NotFound';
import Footer from './layout/Footer/Footer';
//import data from './data.json';
import './style.css';

const axios = require('axios');

const App = () => {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const { data } = await axios.get('https://react-music-demo.herokuapp.com/')
                setInfo(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchInfo()
    }, [info])

    function songLikeChanged(artist,album,song,status) {
        console.log('Like changed')

        try {
            const { data } = axios.post('https://react-music-demo.herokuapp.com/', {
                status: status,
                artist: artist,
                album: album,
                song: song
            })
        } catch (err) {
            console.log(err)
        }

        const newInfo = [...info];
        setInfo(newInfo)
    }

    const artists = [];

    const renderArtist = (data) => {
        data.forEach((artist,index) => {
            artists.push(<div className="artist" key={index}>
            <Artist
                name={artist.artist}
                genre={artist.genre}
                intro={artist.intro}
                data={artist}
                changeLike={songLikeChanged}
            />
            <hr></hr>
            </div>)
        })

        return (
            artists
        )
    }   

    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/artists">
                {renderArtist(info)}
            </Route>
            <Route exact path="/about">
                <About />
            </Route>
            <Route path="/">
                <NotFound />
            </Route>
        </Switch>
        <Footer />
        </>
    )
};

export default App;