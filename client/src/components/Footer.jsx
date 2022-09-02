import {
  Box,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Container,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { MdAlternateEmail, MdOutlinePlace } from "react-icons/md";
import Logo from "../assets/logoPf.jpeg";

function Footer() {
  //-----Estilos para modo oscuro----//
  const bg = useColorModeValue("#319795", "#747d8c");

  //---------------------------------//

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", sm: "column", md: "column", lg: "row" }}
      alignItems={{ base: "center", sm: "center", md: "center" }}
      justifyContent="space-evenly"
      p="2rem"
      bgColor={bg}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "baseline",
        }}
      >
        <Image src={Logo} w="15rem" m="1rem" />
        <Container textAlign={{ base: "center", sm: "center" }}>
          <Text as="i">
            "Constituirnos como un centro líder en rehabilitación física, con
            los mejores profesionales y la más alta calidad de atención a
            nuestros pacientes."
          </Text>
        </Container>
      </Box>
      <Box
        mt={{ base: "1rem", sm: "1rem", md: "1rem", lg: 0 }}
        display="flex"
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        justifyContent="space-evenly"
        w="100%"
        alignItems={{ base: "center", sm: "center", md: "center" }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems={{
            base: "center",
            sm: "center",
            md: "center",
            lg: "baseline",
          }}
        >
          <Heading as="h6" size="sm" m="1rem">
            CONTACTO
          </Heading>
          <List
            spacing={3}
            display="flex"
            flexDirection="column"
            alignItems={{
              base: "center",
              sm: "center",
              md: "center",
              lg: "baseline",
            }}
          >
            <ListItem>
              <ListIcon as={BsTelephone} color="teal.900" />
              0800-354-5050
            </ListItem>
            <ListItem>
              <ListIcon as={ImMobile} color="teal.900" />
              +54 9 351 365-4238
            </ListItem>
            <ListItem>
              <ListIcon as={MdAlternateEmail} color="teal.900" />
              consultaswellness@gmail.com
            </ListItem>
            {/* You can also use custom icons from react-icons */}
            <ListItem>
              <ListIcon as={MdOutlinePlace} color="teal.900" />
              Av. Colón 299, Córdoba, Argentina
            </ListItem>
          </List>
        </Box>
        <Box mt="1rem">
          <Box
            display="flex"
            flexDirection={{ base: "row", sm: "row", md: "column" }}
            flexWrap={{ base: "wrap", sm: "wrap" }}
            justifyContent={{ base: "center", sm: "center" }}
          >
            <Box m="0.5rem">
              <Link to={"/about"}>
                <button>
                  <Text fontWeight="semibold">Nosotros</Text>
                </button>
              </Link>
            </Box>
            <Box m="0.5rem">
              <Link to={"/especialidades"}>
                <button>
                  <Text fontWeight="semibold">Especialidades</Text>
                </button>
              </Link>
            </Box>
            {/* You can also use custom icons from react-icons */}
            <Box m="0.5rem">
              <Link to={"/prestaciones"}>
                <button>
                  <Text fontWeight="semibold">Prestaciones</Text>
                </button>
              </Link>
            </Box>
            <Box m="0.5rem">
              <Link to={"/staff"}>
                <button>
                  <Text fontWeight="semibold">Staff</Text>
                </button>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
