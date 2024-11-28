import CharactersCard from "./CharactersCard";
import "../scss/layout/CharactersList.scss";


function CharactersList({ characters }) {

    //por cada elemento de mi lista quiero que me pinte un personaje
    const charactersElements = characters.map((character) => {
        return <CharactersCard charactersData={character} key={character.id}/>
    })
  return (
    <section>
        <h2>Lista personajes</h2>
        <ul className="characters-list">
          {charactersElements}
        </ul> {/*el array de map lo pintamos aquí*/}  
    </section>
  )
}

export default CharactersList