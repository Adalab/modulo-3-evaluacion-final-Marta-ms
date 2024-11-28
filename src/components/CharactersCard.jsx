

function CharactersCard({ charactersData }) { //cada lista de mi elemento
    console.log(charactersData);
  return (
    <li>
        <img src={charactersData.image} alt={charactersData.name} />
        <h3>{charactersData.name}</h3>
        <p>{charactersData.species}</p>
    </li>
  )
}

export default CharactersCard