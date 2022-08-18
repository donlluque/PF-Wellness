import React from "react";
import { Link } from "react-router-dom";



export default function DoctorCard({id, picture, name, last_name, general_area}) {
    return(
        <div >
          <Link to={`/staff/${id}`}>
          <div>
             <div>
              <img src={picture} alt="img not found" width="200px" height="250px"/>
             </div>
            <div>
               <h3>{last_name} {name}</h3>
             </div>
             <div>
                <h4>{general_area}</h4>
             </div>
          </div>
       </Link>
      </div>
    )
}