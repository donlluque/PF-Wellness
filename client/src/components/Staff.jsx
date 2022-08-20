import React from "react";
import {  getDoctors } from "../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import DoctorCard from "./DoctorCard";
import NavStaff from "./NavStaff";
import { Box,
       Center,
       Heading,
       Wrap,
       WrapItem,
       Flex
 } from '@chakra-ui/react';
 import Pagination from "./Pagination";

function Staff() {

 // const dispatch = useDispatch();
  const allDoctors = useSelector((state) => state.doctors);

   //------------PAGINADO-------------
   const [page, setPage] = useState(1);
   const [forPage] = useState(6);
   const [input, setInput] = useState(1);
   const max = Math.ceil(allDoctors.length / forPage);

  // useEffect(() =>{
  //   dispatch(getDoctors());
  // },[dispatch])display={{md:'flex'}}
  return (
    <>
     <Center h="100vh" top={0} bgColor="teal.50" mb={2}>
        <Heading as="h1" size="2xl">
          Staff
        </Heading>
      </Center>
  <Box bg='#EDF2F7' mt='-10' justifyContent='center'>
    <Center >
    <NavStaff setInput={setInput} setPage={setPage}/>
    </Center>
{
  allDoctors && allDoctors
  .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
  .map(doc => {
    return(
    <Wrap display='inline-flex' ml={'3rem'} justify='center'>
      <WrapItem >
        <Box>
        <DoctorCard
        name={doc.name}
        picture={doc.picture}
        general_area={doc.general_area}
        especialidades_id={doc.especialidades_id}
        id={doc.id}
        />
        </Box>
        </WrapItem>
      </Wrap>
    )
  })
}
<Pagination
          page={page}
          setPage={setPage}
          PerPage={max}
          input={input}
          setInput={setInput}/>
  </Box>
  </>
  );

}

export default Staff;
