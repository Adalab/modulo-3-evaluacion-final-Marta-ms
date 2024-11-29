import FilterByName from "./FilterByName";
import FilterBySpecie from "./FilterBySpecie";
import "../scss/layout/Main.scss"

function Filters({ onChangeName, onChangeSpecie }) {
    return (
        <form className="form-found">
            <FilterByName onChangeName={onChangeName}  />
            <FilterBySpecie onChangeSpecie={onChangeSpecie} />
        </form>
    )
}

export default Filters