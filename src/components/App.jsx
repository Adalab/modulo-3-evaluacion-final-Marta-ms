import "../scss/App.scss";
import CharactersList from "./CharactersList";
import CharactersCard from "./CharactersCard";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";
import Filters from "./Filters";

function App() {

  //creo una variable de estado para poner modificar lo que se pinta en el html 
  const [characters, setCharacters] = useState ([]);
  const [filterName, setFilterName] = useState("");

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => { //para que me devuelva los usurios .then y lo que paso a la card
       //console.log(characters);
       setCharacters(charactersData) //ver en components
    })
    

  }, []) //para que se ejecute solo una vez 

  const handleFilterName = (valueInput) => {
    setFilterName(valueInput);
  }

  //FILTRAR
  const filteredCharacters = characters.filter((character) => {
    return character.name.toLowerCase().includes(filterName.toLowerCase());
  })
  //console.log(filteredCharacters);

  return (
    <>
    <header>
      <h1>Rick and Morty</h1>
    </header>
    <main>
      <Filters onChangeName={handleFilterName}/>
      <CharactersList characters={filteredCharacters} />
    </main>
    </>
  )
}

export default App

