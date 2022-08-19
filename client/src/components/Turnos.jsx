import { Box, Container, Heading } from "@chakra-ui/react";

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
    </>
  );
}

export default Turnos;
