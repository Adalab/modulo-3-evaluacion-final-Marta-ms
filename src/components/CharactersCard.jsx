import { Link } from "react-router-dom"


function CharactersCard({ charactersData }) { //cada lista de mi elemento
    
  return (
    <li className="card">
        <Link to={`/person/${charactersData.id}`}>
            <img src={charactersData.image} alt={charactersData.name} />
            <h3>{charactersData.name}</h3>
            <p>{charactersData.species}</p>
        </Link>
    </li>
  )
}

export default CharactersCard