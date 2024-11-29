import "../scss/layout/CharactersDetail.scss";
import { Link } from 'react-router-dom';


function CharactersDetail({ character }) {
    

    if (!character) {
        return <div>Loading...</div>; // Mientras se carga el personaje, mostramos un mensaje
    }


    return (
        <section className="details-container">
            <Link to="/">
                <button className="detail-back">Volver</button>
            </Link>
            <div className="detail-photo">
                <img className="photo"src={character.image} alt={character.name} />
            </div>
            <div className="detail-text">
                <h4>{character.name}</h4>
                <p>{character.species}</p>
                    <span>{character.species === "Alien" ? "👽" : "🫀"}</span>
                <p>Viene de: {character.planet}</p>
                <p>Sale en: {character.episode.length} episodios</p>
                <p>Está: {character.status}
                    <span>{character.status === "Alive" ? "🤪" : "😵"}</span>
                </p>
            </div>
            
        </section>
    )
}

export default CharactersDetail