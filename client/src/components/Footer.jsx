import {
  Box,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Container,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { BsTelephone } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { MdAlternateEmail, MdOutlinePlace } from "react-icons/md";
import Logo from "../assets/logoPf.jpeg";

function Footer() {
  return (
    <Box
      display={{ md: "flex" }}
      alignItems="center"
      justifyContent="space-evenly"
      p="2rem"
      bgColor="teal.400"
    >
      <Box>
        <Image src={Logo} w="15rem" m="1rem" />
        <Container>
          <Text as="i">
            "Constituirnos como un centro líder en rehabilitación física, con
            los mejores profesionales y la más alta calidad de atención a
            nuestros pacientes."
          </Text>
        </Container>
      </Box>
      <Box>
        <Heading as="h6" size="sm" m="1rem">
          CONTACTO
        </Heading>
        <List spacing={3}>
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
      <Box>
        <List spacing={3}>
          <ListItem>
            <Link to={"/about"}>
              <button>Nosotros</button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/especialidades"}>
              <button>Especialidades</button>
            </Link>
          </ListItem>
          {/* You can also use custom icons from react-icons */}
          <ListItem>
            <Link to={"/prestaciones"}>
              <button>Prestaciones</button>
            </Link>
          </ListItem>
          <ListItem>
            <Link to={"/staff"}>
              <button>Staff</button>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Footer;
