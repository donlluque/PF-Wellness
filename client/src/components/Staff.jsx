import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import DoctorCard from "./DoctorCard";
import NavStaff from "./NavStaff";
import {
  Box,
  Center,
  Heading,
  Wrap,
  WrapItem,
  Text,
  CircularProgress,
} from "@chakra-ui/react";
import Pagination from "./Pagination";
import { useEffect } from "react";
import { getHours } from "../redux/actions";

function Staff() {
  const allDoctors = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHours());
  }, [dispatch]);

  //------------PAGINADO-------------
  const [page, setPage] = useState(1);
  const [forPage] = useState(6);
  const [input, setInput] = useState(1);
  const max = Math.ceil(allDoctors.length / forPage);

  return (
    <>
      <Center
        h={{ base: "125vh", sm: "125vh", md: "100vh", lg: "100vh" }}
        top={0}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="linear-gradient(
   rgba(230, 255, 250, 0.8),
   rgba(230, 255, 250, 0.8)
 ),
 url(https://st.depositphotos.com/1518767/1415/i/450/depositphotos_14150393-stock-photo-doctors-with-nurses-with-arms.jpg)"
        flexDirection="column"
      >
        <Heading
          as="h1"
          size="4xl"
          m="1rem"
          mt={{ base: "6rem", sm: "6rem", md: "4rem", lg: "1rem" }}
        >
          Staff
        </Heading>
        <Box w={{ base: "75%", sm: "75%", md: "60%" }} textAlign="center">
          <Text as="i" fontSize="xl">
            "El bienestar y la salud son un deber, de otra manera no podriamos
            mantener nuestra mente fuerte y clara"
          </Text>
        </Box>
      </Center>

      <Box bg="#fafbfd" justifyContent="center">
        <Center>
          <NavStaff setInput={setInput} setPage={setPage} />
        </Center>

        {!allDoctors.length ? (
          <Center m="8rem">
            <CircularProgress isIndeterminate color="teal.500" size="100px" />
          </Center>
        ) : (
          false
        )}
        <Wrap justify={"center"}>
          {allDoctors &&
            allDoctors
              .slice((page - 1) * forPage, (page - 1) * forPage + forPage)
              .map((doc) => {
                return (
                  <WrapItem>
                    <DoctorCard
                      name={doc.name}
                      picture={doc.picture}
                      general_area={doc.general_area}
                      specialty={doc.specialty}
                      id={doc.id}
                    />
                  </WrapItem>
                );
              })}
        </Wrap>
        <Pagination
          page={page}
          setPage={setPage}
          PerPage={max}
          input={input}
          setInput={setInput}
        />
      </Box>
    </>
  );
}

export default Staff;
