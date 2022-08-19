import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { getDoctors, filter } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Select,
      Button,
      Box
} from '@chakra-ui/react'

export default function NavStaff({setInput, setPage}){
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
        setValues({...values,[e.target.name]: e.target.value});
        setPage(1);
        setInput(1);
    }  
    function handleClick(e) {
        e.preventDefault();
    dispatch(getDoctors());
   }
  
    return(
        <Box display={'inline-flex'} >
              
                <SearchBar setInput={setInput} setPage={setPage}/>
              
                <Box display='inline-flex'>
              
                <Button m='1rem' onClick={e => {handleClick(e)}}>BACK</Button>
                
                    <Select m='1rem' bg={'green.100'} color='tela.700' onChange={e => handleFilter(e)} value={values.especialidad} name='especialidad'>
                    <option value='All'>Areas Generales</option>
                    <option value='deportologia'>Deportología</option>
                    <option value='fisioterapia y kinesiologia'>Kinesiología y Fisioterapia</option>
                    <option value='Osteopatia'>Osteopatía</option>
                    <option value='quiropraxia'>Quiropraxia</option>
                    <option value='reumatologia'>Reumatología</option>
                    <option value='terapia de dolor'>Terapia de Dolor</option>
                    <option value='traumatologia'>Traumatología</option>
                    </Select>
                     
                <Select m='1rem' bg={'green.100'} color='tela.700' onChange={e => handleFilter(e)} value={values.obrasocial} name='obrasocial'>
                    <option value='All'>Prestaciones</option>
                    <option value='osde'>Osde</option>
                    <option value='swiss medical'>Swiss Medical</option>
                    <option value='galeno'>Galeno</option>
                    <option value='medicus'>Medicus</option>
                    <option value='parque salud'>Parque Salud</option>
                    <option value='medife'>Medife</option>
                    
                </Select>

                </Box>
           
        </Box>

    );

}