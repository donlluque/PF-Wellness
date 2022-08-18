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

function NavBar() {
  return (
    <Box position="absolute" w="100%">
      <Flex m={2}>
        <Image
          boxSize="100px"
          objectFit="cover"
          src="https://bit.ly/dan-abramov"
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
          <Button colorScheme="teal" variant="solid">
            Turnos Online
          </Button>
          <Button colorScheme="teal" variant="outline">
            Acceder
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
}

export default NavBar;
