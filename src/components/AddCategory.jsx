import { useState } from 'react';
import { PropTypes } from "prop-types";

const AddCategory = ({ setPersonas }) => {
  const [inputHandle, setInputHandle] = useState('');
  
  const changeInput = (e) => {
    setInputHandle( e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputHandle);
    setPersonas(cats => [...cats, inputHandle]);
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor='heroes'>Component Add Category</label>
        <input
            name='heroes'
            placeholder='Nombre del Heroe'
            type='text'
            value={inputHandle}
            onChange={changeInput}
        />
    </form>
  )
}

export default AddCategory;

AddCategory.propTypes = {
    setPersonas: PropTypes.func.isRequired
}
