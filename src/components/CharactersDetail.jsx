import "../scss/layout/CharactersDetail.scss";


function CharactersDetail({ character }) {
    console.log(character);

    if (!character) {
        return <div>Loading...</div>; // Mientras se carga el personaje, mostramos un mensaje
    }


    return (
        <section className="details-container">
            <div className="detail-photo">
                <img className="photo"src={character.image} alt={character.name} />
            </div>
            <div className="detail-text">
                <h4>{character.name}</h4>
                <p>{character.specie}</p>
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