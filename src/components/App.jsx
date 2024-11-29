import "../scss/App.scss";
import CharactersList from "./CharactersList";
//import CharactersCard from "./CharactersCard";
import { useEffect, useState } from "react";
import getCharactersFromApi from "../services/getCharactersFromApi";
import Filters from "./Filters";
import CharactersDetail from "./CharactersDetail";
import Header from "./Header";
import { Routes, Route, useLocation, matchPath } from "react-router-dom";

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

  

  const { pathname } = useLocation();
  const routeData = matchPath("/person/:idPerson", pathname);
  //console.log(pathname);

  const idPerson = routeData !== null ? routeData.params.idPerson : null;

  //const perId = String(urlId);
  
    const characterSelected = characters.find((character) => {
        return character.id === Number(idPerson);
        
    })
    //console.log(characterSelected);

  return (
    <>
    <Header />
    
    <main className="main-container">
      <Routes>
        <Route path="/" element={(
          <>
            <Filters onChangeName={handleFilterName}/>
            <CharactersList characters={filteredCharacters} />
          </>

        )}/>

        <Route path="/person/:idPerson" element={<CharactersDetail character={characterSelected} />} />
        <Route path="*" element={<h5> Pagina no encontrada</h5>} />
       
      </Routes>
    </main>
    </>
  )
}

export default App

