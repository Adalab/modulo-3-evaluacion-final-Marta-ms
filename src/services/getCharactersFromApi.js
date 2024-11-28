
 const getCharactersFromApi = () => {
    return fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })

 }

 export default getCharactersFromApi;