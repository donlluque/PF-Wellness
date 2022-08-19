import React from "react";
import { getDetail, cleanDoctor} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


export default function DoctorDetail({id}) {
    const dispatch = useDispatch();
   // const { id } = useParams();
    

    useEffect(() => {
        dispatch(getDetail(id));
        return () => {
            dispatch(cleanDoctor());
        }
    }, [dispatch]);



    const doctor = useSelector(state => state.detail);
    console.log("soy doctor",doctor);
    return(
        <div>
            {
                doctor && doctor
                ? <div>
                    <h3>{doctor.general_area}</h3>
                    <h4>Matrícula: {doctor.medic_id}</h4>
                    <h4>Prestaciones: {doctor.prepaid_health?.join(", ")}</h4>
                    <h4>{doctor.description}</h4>
                    <div>
                    <h4>Contacto:</h4>
                    <p>Tel: {doctor.phone}</p>
                    <p>Email: {doctor.email}</p>
                    </div>
                    
                </div>
                : <h4>no se encontro</h4>
            }
        </div>
    )
}

    // return(
    // <div>
    //     {
           
    //      doctor && doctor
            
            
        //    <div >
        //      <div>
        //       <div>
        //       <h3>HP:</h3>
        //       <p> {doctor[0].hp}</p>
        //       </div>
        //       <div>
        //       <h3>Types:</h3>
        //       <p> {doctor[0].types.map(t => t.name).join(" - ")}</p>
        //       </div>
        //       <div>
        //       <h3>Attack:</h3>
        //       <p> {doctor[0].attack}</p>
        //       </div>
        //       </div>
        //       <div>
        //       {
        //        doctor[0].defense && 
        //         <div>
        //         <h3>Defense:</h3>
        //         <p>{pokemon[0].defense}</p>
        //         </div>
        //       }
        //        {
        //         pokemon[0].speed && 
        //         <div>
        //         <h3>Speed:</h3>
        //         <p> {pokemon[0].speed}</p>
        //         </div>
        //       }
        //        {
        //         pokemon[0].weight && 
        //         <div>
        //         <h3>Weight:</h3>
        //         <p> {pokemon[0].weight}</p>
        //         </div>
        //       }
        //        {
        //         pokemon[0].height && 
        //         <div>
        //         <h3>Height: </h3>
        //         <p>{pokemon[0].height}</p>
        //         </div>
        //       }
        //       </div>
        //    </div>
//         }

//         </div>
//         )
// }
   