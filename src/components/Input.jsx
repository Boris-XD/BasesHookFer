import { useState } from "react";
import { PropTypes } from "prop-types";

const Input = ({updatePersonas}) => {
    
    const [texts,setTexts] = useState('');
    const handleChange = ( event ) => {
        setTexts(event.target.value);
        console.log(texts);
    };
  
    const handleSubmit = (event) => {
        event.preventDefault();
        if(texts.trim().length > 2)
        {
            updatePersonas( persona => [...persona, texts]);
            setTexts('');
        }
    }

    return (
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    value={texts}
                    name='inp'
                    onChange={handleChange}
                    required
                />
            </form>
    );
}

export default Input;

Input.propTypes = {
    updatePersonas: PropTypes.func.isRequired
}
