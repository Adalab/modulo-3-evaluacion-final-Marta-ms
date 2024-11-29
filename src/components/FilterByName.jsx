

function FilterByName({ onChangeName }) {

    const handleChange = (ev) => {
       
        onChangeName(ev.target.value);
    }
  return (
    <>
    
        <label htmlFor="name">Personaje</label>
        <input type="text" id="name" placeholder="encuentralo aqui" onChange={handleChange} />
      
    </>
  )
}

export default FilterByName