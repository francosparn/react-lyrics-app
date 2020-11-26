import React, { Fragment, useState } from 'react';

const Form = ({ saveSearchLyrics }) => {

    // Define the states
    const [ search, saveSearch ] = useState({
        artist: '',
        song: ''
    });

    const [ error, saveError ] = useState(false);

    // Read content of inputs{
    const updateState = e => {
        saveSearch({
            ...search,
            [ e.target.name ] : e.target.value
        });
    }

    const { artist, song } = search;

    // Consult APIs
    const searchInfo = e => {
        e.preventDefault();

        // Validation
        if(artist.trim() === '' || song.trim() === ''){
            saveError(true);
            return;
        }

        saveError(false);

        // Send to main component
        saveSearchLyrics(search);
    }

    return ( 
        <Fragment>
            <div className="main">
                <div className="container">
                    <form
                        onSubmit={searchInfo}
                    >
                        <div className="secondary">
                            <h1 className="text-center text-light">Buscador de Canciones</h1>
                            { error ? <p className="alert alert-danger text-center error">Todos los campos del formulario son obligatorios.</p> : null }
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Artista</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre del Artista"
                                        name="artist"
                                        onChange={updateState}
                                        value={artist}
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Canción</label>
                                        <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nombre de la Canción"
                                        name="song"
                                        onChange={updateState}
                                        value={song}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="button"
                            >Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default Form;