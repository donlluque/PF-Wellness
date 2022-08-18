import React from "react";
import SearchBar from "./SearchBar";

export default function NavStaff(){
    return(
        <div>
            <nav>
                <SearchBar/>
                <div>
                <select>
                    <option disabled value='especialidad'>Especialidad</option>
                    <option value='deportología'>Deportología</option>
                    <option value='kineyfisio'>Kinesiología y Fisioterapia</option>
                    <option value='osteo'>Osteopatía</option>
                    <option value='quiropraxia'>Quiropraxia</option>
                    <option value='reumatología'>Reumatología</option>
                    <option value='terapia'>Terapia de Dolor</option>
                    <option value='traumatología'>Traumatología</option>
                </select>
                <select>
                    <option disabled value='obrasocial'>Prestaciones</option>
                    <option value='osde'>Osde</option>
                    <option value='swissmedical'>Swiss Medical</option>
                    <option value='galeno'>Galeno</option>
                    <option value='medicus'>Medicus</option>
                    <option value='parquesalud'>Parque Salud</option>
                    <option value='medife'>Medife</option>
                    
                </select>

                </div>
            </nav>
        </div>

    );

}