import { MenuButton } from "@chakra-ui/react";
import React  from "react";

export default function Pagination({page, setPage, pokemonsPerPage, input,setInput }){


    function nextPage(){
        setInput (input + 1)
        setPage (page + 1);
    }
    
    function previousPage(){
        setInput (input - 1)
        setPage (page - 1);
    }
    

    return(
       <div>
            <button disabled={page === 1 || page < 1} onClick={previousPage}>⇠</button>
            <div>
            <input name='page' autoComplete="off" type="text" value={input}/>
            <p > of {pokemonsPerPage}</p>
            </div>
            <button disabled={ page > pokemonsPerPage || page === pokemonsPerPage } onClick={nextPage}>⇢</button>
        </div>
    )
}