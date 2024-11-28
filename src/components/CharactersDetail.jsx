
function CharactersDetail({ character }) {
    console.log(character);
    return (
        <section>
            <img src={character.image} alt={character.name} />
            <h4>{character.name}</h4>
            <p>{character.specie}</p>
            <p>Viene de: {character.planet}</p>
            <p>Sale en: {character.episode.length} episodios</p>
            <p>Está: {character.status}</p>
        </section>
    )
}

export default CharactersDetail