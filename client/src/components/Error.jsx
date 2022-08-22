import { Container, Heading, Box, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { baseURL } from "../index.js";

function Error() {
  const { pathname } = useLocation();
  return (
    <Box h="60vh" display="flex" flexDirection="column" alignItems="center">
      <Heading
        textColor="red"
        mt="6rem"
        mb="1rem"
        p="1rem"
        textAlign="center"
        as="h3"
        size="2xl"
        w="70vw"
        bgColor="white"
        borderRadius="2rem"
      >
        Error 404: Página no encontrada
      </Heading>
      <Box
        w="70vw"
        textAlign="center"
        fontSize="1.5rem"
        alignItems="center"
        p="2rem"
        bgColor="white"
        borderRadius="2rem"
      >
        {`La URL`} <b>{`${baseURL}${pathname}`}</b> {`no existe`}
      </Box>
    </Box>
  );
}

export default Error;
