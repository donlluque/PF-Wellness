import React from "react";
import { searchByName } from "../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Input, Box } from '@chakra-ui/react';
import { GrSearch } from "react-icons/gr";


export default function SearchBar() {
    const dispatch = useDispatch();
    const [doctor, setDoctor] = useState("");

 function handleChange(e) {
    
    setDoctor(e.target.value)//el valor del input.
 }

 function handleClick(e) {
    
    if(doctor){
        dispatch(searchByName(doctor));
        setDoctor("");
    }else{
        alert ("Por favor insertar un profesional")
    }
 }

    return(
        <Box position="absolute" display="flex" ml="25rem" w="20rem" mt={1}>
            <Input type="text" value={doctor} placeholder="Buscar Profesional" variant='flushed' onChange={e => handleChange(e)}/>
            <IconButton onClick={e => handleClick(e)} aria-label='Search database' icon={<GrSearch />} />
        </Box>
    )
}