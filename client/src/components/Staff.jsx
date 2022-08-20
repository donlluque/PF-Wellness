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
       Text,
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
     <Center h="100vh" top={0} bgColor="teal.50" mb={2} 
     bgRepeat="no-repeat"
     bgSize="cover"
     bgImage="linear-gradient(
   rgba(230, 255, 250, 0.5),
   rgba(230, 255, 250, 0.5)
 ),
 url(https://st.depositphotos.com/1518767/1415/i/450/depositphotos_14150393-stock-photo-doctors-with-nurses-with-arms.jpg)"
    flexDirection="column"
    >
        <Heading as="h1" size="4xl" m="1rem">
          Staff
        </Heading>
        <Box>
          <Text as="i" fontSize="xl">
            "El bienestar y la salud son un deber, de otra manera
            no podriamos mantener nuestra mente fuerte y clara"
          </Text>
        </Box>
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
    <Wrap display='inline-flex' ml={'3rem'} >
      <WrapItem  >
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
