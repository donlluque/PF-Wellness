import {
  Button,
  Stack,
  Flex,
  ButtonGroup,
  Spacer,
  Image,
  Box,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoPf.jpeg";
import { useRef, useState } from "react";
import FormLogin from "./FormLogin";
import FormRegistration from "./FormRegistration";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <Box position="absolute" w="100%">
      <Flex m={2}>
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
          <Link to="/turnos">
            <Button colorScheme="teal" variant="solid">
              Turnos Online
            </Button>
          </Link>

          <Button colorScheme="teal" variant="outline" onClick={onOpen}>
            Acceder
          </Button>
        </ButtonGroup>
      </Flex>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {login ? (
            <DrawerHeader borderBottomWidth="1px">Ingresar</DrawerHeader>
          ) : (
            <DrawerHeader borderBottomWidth="1px">Crear cuenta</DrawerHeader>
          )}

          <DrawerBody>
            {login ? (
              <Stack pt={6}>
                <Text align={"center"}>
                  No tiene cuenta?{" "}
                  <Button
                    colorScheme="teal"
                    variant="link"
                    onClick={handleLogin}
                  >
                    Crear cuenta
                  </Button>
                </Text>
              </Stack>
            ) : (
              <Stack pt={6}>
                <Text align={"center"}>
                  Ya tiene cuenta?{" "}
                  <Button
                    variant="link"
                    onClick={handleLogin}
                    colorScheme="teal"
                  >
                    Ingresar
                  </Button>
                </Text>
              </Stack>
            )}
            {login ? (
              <FormLogin onClose={onClose} />
            ) : (
              <FormRegistration onClose={onClose} />
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

export default NavBar;
