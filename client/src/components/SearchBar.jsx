import React from "react";
import { useState } from "react";
//import { useDispatch } from "react-redux";


export default function SearchBar() {
   // const dispatch = useDispatch();
    const [doctor, setDoctor] = useState("");

 function handleChange(e) {
    
    setDoctor(e.target.value)//el valor del input.
 }

 function handleClick(e) {
    
    if(doctor){
        //dispatch(getPokeByName(pokemon));
        setDoctor("");
    }else{
        alert ("Insert a Pokemon name")
    }
 }

    return(
        <div >
            <input type="text" value={doctor} placeholder="Buscar Profesional" onChange={e => handleChange(e)}/>
            <button type="button" onClick={e => handleClick(e)}>
                Buscar
            </button>
        </div>
    )
}