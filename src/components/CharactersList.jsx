import CharactersCard from "./CharactersCard";
import notFound from "../images/not-found.jpeg"
import "../scss/layout/CharactersList.scss";


function CharactersList({ characters }) {

    //por cada elemento de mi lista quiero que me pinte un personaje
    const charactersElements = characters.map((character) => {
        return <CharactersCard charactersData={character} key={character.id}/>
    })

    //si no se encuentra un resultado 
    if (characters.length === 0) {
      return (
        <div>
          <p className="not-found">Este personaje se esconde muy bien</p>
          <img
            className="not-found-img"
            src={notFound}
            alt="0 resultados"
            title="0 resultados"
          />
        </div>
      );
    } 



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