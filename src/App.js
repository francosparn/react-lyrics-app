import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';
import Error from './components/Error';
import Footer from './components/Footer';

import axios from 'axios';

function App() {

  // Define the state
  const [ searchlyrics, saveSearchLyrics ] = useState({});
  const [ lyrics, saveLyrics ] = useState('');
  const [ info, saveInfo ] = useState({});
  const [ error, saveError ] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {

    if(Object.keys(searchlyrics).length === 0) return null;

      const { artist, song } = searchlyrics;

      const lyricsURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const artistURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      try{
        const [{ data: lyrics }, { data: info }] = await Promise.all([
          axios.get(lyricsURL),
          axios.get(artistURL)
        ]);

      saveError(false);

      saveLyrics(lyrics.lyrics);
      saveInfo(info.artists[0]);

      } catch(error){
        saveError(true);
      }

    } 
    consultAPI();

  },[searchlyrics]);

  return (
    <Fragment>
        <Form 
            saveSearchLyrics={saveSearchLyrics}
        />
        <div className="container">
            { error ? <Error message="Hubo un error en la búsqueda, el artista o la canción que intenta buscar no está disponible o no existe." /> : null }
        </div>
        <div className="container mb-5">
            <div className="row">
                <div className="col-md-5">
                    <Info 
                        info={info}
                    />
                </div>
                <div className="col-md-7">
                    <Song 
                        lyrics={lyrics}
                    />
                </div>
            </div>
        </div>
        <Footer 
          name="Franco Sparn"
        />
    </Fragment>
  )
}

export default App;
