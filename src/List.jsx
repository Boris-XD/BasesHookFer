import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const Listado = () => {
    const [personas, setPersonas] = useState(['Pun chow']);

    const addPerson = ( newPerson) => {
        setPersonas([...personas, newPerson]);
    }

    return (
        <>
            <h2>Gif Expert App</h2>
            <hr/>
            <AddCategory setPersonas={setPersonas}/>
            <hr/>
            <ol>
                { personas.map((person) => <GifGrid key={person} category={person} />) }
            </ol>       
        </>
    );
}

export default Listado;