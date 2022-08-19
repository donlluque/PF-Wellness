import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { getDoctors, filter } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from 'react';

export default function NavStaff(){
   const dispatch = useDispatch();
   const [values, setValues] = useState({
    especialidad: 'All',
    obrasocial: 'All'

   })

   useEffect(( ) => {
    
    dispatch(filter(values));

   }, [dispatch,values]);

    function handleFilter(e){
        e.preventDefault();
        setValues({...values,[e.target.name]: e.target.value})
    }  
    function handleClick(e) {
        e.preventDefault();
    dispatch(getDoctors());
   }
  
    return(
        <div>
            <nav>
                <SearchBar/>
                <div>
                <select onChange={e => handleFilter(e)} value={values.especialidad} name='especialidad'>
                    <option value='All'>Areas Generales</option>
                    <option value='deportologia'>Deportología</option>
                    <option value='fisioterapia y kinesiologia'>Kinesiología y Fisioterapia</option>
                    <option value='Osteopatia'>Osteopatía</option>
                    <option value='quiropraxia'>Quiropraxia</option>
                    <option value='reumatologia'>Reumatología</option>
                    <option value='terapia de dolor'>Terapia de Dolor</option>
                    <option value='traumatologia'>Traumatología</option>
                </select>
                <select onChange={e => handleFilter(e)} value={values.obrasocial} name='obrasocial'>
                    <option value='All'>Prestaciones</option>
                    <option value='osde'>Osde</option>
                    <option value='swiss medical'>Swiss Medical</option>
                    <option value='galeno'>Galeno</option>
                    <option value='medicus'>Medicus</option>
                    <option value='parque salud'>Parque Salud</option>
                    <option value='medife'>Medife</option>
                    
                </select>
                <button onClick={e => {handleClick(e)}}>BACK</button>

                </div>
            </nav>
        </div>

    );

}