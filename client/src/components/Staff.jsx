import React from "react";
import {  getDoctors } from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import DoctorCard from "./DoctorCard";
import NavStaff from "./NavStaff";
import { Box } from '@chakra-ui/react';

function Staff() {

  const dispatch = useDispatch();
  const allDoctors = useSelector((state) => state.doctors);

  useEffect(() =>{
    dispatch(getDoctors());
  },[dispatch])
  return (
  <div>
    <Box position="absolute" m={20} ml="25rem" flexDirection="row" align="center">
    <NavStaff/>
    </Box>
{
  allDoctors && allDoctors
  .map(doc => {
    return(
      <div key={doc.id}>
        <DoctorCard
        name={doc.name}
        picture={doc.picture}
        general_area={doc.general_area}
        id={doc.id}
        />
      </div>
    )
  })
}
  </div>
  );

}

export default Staff;
