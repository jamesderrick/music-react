import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Album from '../Album/Album';
import './Artist.css'

const axios = require('axios');

const Artist = () => {

    const [artistInfo, setArtistInfo] = useState([]);
    const [update, setUpdate] = useState(false);

    const params = useParams();

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const { data } = await axios.get(`https://react-music-demo.herokuapp.com/artist/${params.id}`)
                setArtistInfo(data)
            } catch(err) {
                console.log(err)
            }
        }
        fetchInfo()
    }, [update])

    function handleLikeButtonClick(url,status) {

        try {
            const { data } = axios.post('https://react-music-demo.herokuapp.com/', {
                status: status,
                artist: url.split('/')[0],
                album: url.split('/')[1],
                song: url.split('/')[2]
            })
        } catch (err) {
            console.log(err)
        }
        setUpdate(!update)

    }

    const renderAlbums = (data) => {
        const albums = []

        if(data.length !== 0) {
            data.albums.forEach((album,index) => {
                albums.push(
                <li className="album" key={index}>
                    <Album 
                        title={album.title} 
                        artwork={album.artwork} 
                        year={album.year} 
                        songs={album.songs}
                        url={`${artistInfo.artist}/${album.title}`}
                        handleLikeButtonClick={handleLikeButtonClick}
                    />
                    <hr></hr>
                </li>
                )
            })
        }
        return albums
    }

    return (
        <div className="artist">
            <h1>{artistInfo.artist}</h1>
            <h6>{artistInfo.genre}</h6>
            <p>{artistInfo.intro}</p>
            <ul>
                {renderAlbums(artistInfo)}
            </ul>
        </div>
    )
}

export default Artist;