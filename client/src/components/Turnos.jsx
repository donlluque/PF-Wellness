import { Box, Container, Heading } from "@chakra-ui/react";
import Staff from './Staff.jsx';
import NavStaff from "./NavStaff.jsx";

function Turnos() {
  return (
    <>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        h="80vh"
      >
       
        <Heading as="h1" size="4xl">
          PROXIMAMENTE!
        </Heading>
        <Box fontSize="2xl" p="1rem">
          - Página en construcción -
        </Box>
      </Box>

      {/* <Staff/> */}

     
    </>
  );
}

export default Turnos;
