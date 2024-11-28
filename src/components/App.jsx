import "../scss/App.scss";
import CharactersList from "./CharactersList";
import CharactersCard from "./CharactersCard";
import { useEffect } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";

function App() {

  useEffect(() => {
    getCharactersFromApi();
  }, []) //para que se ejecute solo una vez 

  return (
    <>
    <header>
      <h1>Rick and Morty</h1>
    </header>
    <main>
      <CharactersList />
      <CharactersCard />
    </main>
    </>
  )
}

export default App

