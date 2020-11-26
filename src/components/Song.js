import React, { Fragment } from 'react';

const Song = ({ lyrics }) => {

    if(lyrics.trim() === '') return null;

    return (
        <Fragment>
            <h2 className="mt-4">Letra</h2>
            <hr className="bg-danger"/>
            <p className="lyrics">{ lyrics }</p>
        </Fragment>        
    );
}
export default Song;