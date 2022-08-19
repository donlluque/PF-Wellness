import {
  Button,
  Stack,
  Flex,
  ButtonGroup,
  Spacer,
  Image,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoPf.jpeg";

function NavBar() {
  return (
    <Box position="absolute" w="100%">
      <Flex m={2} >
        <Image
          w="15rem"
          ml="0.5rem"
          objectFit="cover"
          src={Logo}
          alt="Dan Abramov"
        />
        <Spacer />
        <Box>
          <Stack direction="row" spacing={4} align="center">
            <Link to="/">
              <Button colorScheme="teal" variant="ghost">
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button colorScheme="teal" variant="ghost">
                Nosotros
              </Button>
            </Link>
            <Link to="/especialidades">
              <Button colorScheme="teal" variant="ghost">
                Especialidades Médicas
              </Button>
            </Link>
            <Link to="/prestaciones">
              <Button colorScheme="teal" variant="ghost">
                Prestaciones
              </Button>
            </Link>
            <Link to="staff">
              <Button colorScheme="teal" variant="ghost">
                Staff
              </Button>
            </Link>
          </Stack>
        </Box>

        <Spacer />
        <ButtonGroup>
          <Link to="/crearcuenta">
            <Button colorScheme="teal" variant="solid">
              Turnos Online
            </Button>
          </Link>
          <Link to="/crearcuenta">
            <Button colorScheme="teal" variant="outline">
              Acceder
            </Button>
          </Link>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default NavBar;
