

function FilterByName({ onChangeName }) {

    const handleChange = (ev) => {
        //console.log(ev.target.value);
        onChangeName(ev.target.value);
    }
  return (
    <>
        <label htmlFor="name">Personaje</label>
        <input type="text" id="name" onChange={handleChange} />
    
    </>
  )
}

export default FilterByName