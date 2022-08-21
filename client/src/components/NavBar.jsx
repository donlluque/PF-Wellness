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
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { Link, useHistory } from "react-router-dom";
import Logo from "../assets/logoPf.jpeg";
import { useRef, useState } from "react";
import FormLogin from "./FormLogin";
import FormRegistration from "./FormRegistration";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions";
import { FaUserCircle } from "react-icons/fa";

function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef();
  const [login, setLogin] = useState(true);
  const isUserLogIn = useSelector((state) => state.logInState);
  const idUserLogIn = useSelector((state) => state.idUserLogIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = () => {
    setLogin(!login);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    history.push("/");
  };

  return (
    <Box position="absolute" w="100%">
      <Box
        display="flex"
        m={2}
        flexDirection={{ sm: "column", md: "column", lg: "column", xl: "row" }}
        alignItems={{ sm: "center", md: "center", lg: "center" }}
      >
        <Image
          w="15rem"
          ml="0.5rem"
          objectFit="cover"
          src={Logo}
          alt="Dan Abramov"
        />
        <Spacer />
        <Box
          display="flex"
          flexDirection={{
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
          }}
          alignItems={{ sm: "center", md: "center", lg: "center" }}
        >
          <Stack
            spacing={4}
            direction={{ sm: "column", md: "row" }}
            align={{ sm: "center", md: "row" }}
          >
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

          {!isUserLogIn && (
            <Button colorScheme="teal" variant="outline" onClick={onOpen}>
              Acceder
            </Button>
          )}
          {isUserLogIn && (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button}>
                    {isOpen ? "Close" : <Icon boxSize={7} as={FaUserCircle} />}
                  </MenuButton>
                  <MenuList>
                    <Link to={`/userProfile/${idUserLogIn}`}>
                      <MenuItem>Ver perfil</MenuItem>
                    </Link>
                    <MenuItem onClick={handleLogOut}>Cerrar Sesión</MenuItem>
                  </MenuList>
                </>
              )}
            </Menu>
          )}
        </ButtonGroup>
      </Box>
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
