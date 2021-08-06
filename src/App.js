import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './layout/Header/Header';
import Welcome from './layout/Welcome/Welcome';
import Artist from './components/Artist/Artist';
import ArtistList from './components/ArtistList/ArtistList';
import About from './layout/About/About';
import NotFound from './layout/NotFound/NotFound';
import Footer from './layout/Footer/Footer';
import './style.css';

const axios = require('axios');

const App = () => {

    return (
        <>
        <Header />
        <Switch>
            <Route exact path="/">
                <Welcome />
            </Route>
            <Route exact path="/artists">
                <ArtistList />
            </Route>
            <Route exact path="/artist/:id">
                <Artist />
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