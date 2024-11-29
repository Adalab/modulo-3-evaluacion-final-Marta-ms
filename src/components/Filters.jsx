import FilterByName from "./FilterByName";
import "../scss/layout/Main.scss"

function Filters({ onChangeName }) {
    return (
        <form className="form-found">
            <FilterByName onChangeName={onChangeName}  />
        </form>
    )
}

export default Filters