import "../scss/App.scss";
import CharactersList from "./CharactersList";
import CharactersCard from "./CharactersCard";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";

function App() {

  //creo una variable de estado para poner modificar lo que se pinta en el html 
  const [characters, setCharacters] = useState ([]);

  useEffect(() => {
    getCharactersFromApi().then((charactersData) => { //para que me devuelva los usurios .then 
       //console.log(characters);
       setCharacters(charactersData) //ver en components
    })
    

  }, []) //para que se ejecute solo una vez 

  return (
    <>
    <header>
      <h1>Rick and Morty</h1>
    </header>
    <main>
      <CharactersList characters={characters} />
      <CharactersCard />
    </main>
    </>
  )
}

export default App

