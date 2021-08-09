import React, {useState, useEffect} from 'react';
import Card from '../Card/Card';
import './ArtistList.css';

const axios = require('axios');

export default function ArtistList(props) {

    const [info, setInfo] = useState([]);

    useEffect(() => {
        let isLoading = true
        const fetchInfo = async () => {
            try {
                const { data } = await axios.get('https://react-music-demo.herokuapp.com/artists')
                if (isLoading) setInfo(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchInfo()
        return () => { isLoading = false };
    }, [info])

    const artists = [];

    const renderArtistCards = (data) => {
        data.forEach(artist => {
            artists.push(<div key={artist.id}>
                <Card 
                    heading={artist.artist}
                    subHeading={artist.genre}
                    content={artist.intro.length > 200 ? artist.intro.substring(0,200) + '...' : artist.intro}
                    button= {{
                        label: "View Albums",
                        link: `/artist/${artist.id}`
                    }}
                />
            </div>)
        })

        return (
            artists
        )
    }  

    return (
        <div className="container">
            {renderArtistCards(info)}
        </div>
    )
}

