import React from 'react';

const Info = ({ info }) => {

    if(Object.keys(info).length === 0) return null;

    const { strArtistThumb, strGenre, strBiographyES, strCountry, intFormedYear, strArtist } = info;
    return ( 
        <div className="card mt-4">
            <div className="card-header bg-danger text-light text-center font-weight-bold">
                <h4>{strArtist}</h4>
            </div>
                <img src={strArtistThumb} className="img-fluid" alt="Logo Artista" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><img src="assets/img/pin.png" alt="Origen Logo" /> <b>Origen</b>: {strCountry}</li>
                    <li className="list-group-item"><img src="assets/img/gender.png" alt="Genero Logo" /> <b>Género</b>: {strGenre}</li>
                    <li className="list-group-item"><img src="assets/img/year.png" alt="Año Logo" /> <b>Fundación</b>: {intFormedYear}</li>
                </ul>
            <div className="card-body">
                <h2 className="card-title"><img src="assets/img/bio.png" alt="Biografia Logo" /> Biografía</h2>
                <p className="card-text">{strBiographyES}</p>
                <div className="card-footer">
                    <h4 className="card-text text-uppercase text-center my-4">Redes Sociales</h4>
                    <hr />
                    <p className="card-text redes">
                    <a href={`https://${info.strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href={`https://${info.strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href={`https://${info.strWebsite}`} target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-globe"></i>
                    </a>
                    </p>
                </div>
            </div>
        </div>
     );
}
 
export default Info;