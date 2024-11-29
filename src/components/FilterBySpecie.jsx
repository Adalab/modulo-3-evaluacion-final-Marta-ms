


function FilterBySpecie({ onChangeSpecie }) {
    const handleChangeSpecie = (ev) => {
        onChangeSpecie(ev.target.value)
    }
  return (
    <div>
        <h5>Especie</h5>
        <label htmlFor="">Alien</label>
        <input type="radio" id="alien" name="species" value="alien" onChangeSpecie={handleChangeSpecie}/>
        <label htmlFor="">Human</label>
        <input type="radio" id="human" name="especies" value="human" onChangeSpecie={handleChangeSpecie} />
    </div>
  )
}

export default FilterBySpecie