
 const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        const parsedCharacters = data.results.map((character) => {
            //console.log(character);
            return {
                image: character.image,
                name: character.name,
                species: character.species,
                planet: character.origin.name,
                episode: character.episode,
                status: character.status,
                id: character.id,
            }


        })
        return parsedCharacters; //para que devuelva el array de objetos con la info
    })

 }

 export default getCharactersFromApi;