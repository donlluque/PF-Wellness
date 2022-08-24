import {
  Button,
  Stack,
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
import { dateUser, logOut } from "../redux/actions";
import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

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

  //LOGIN NUEVO
  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0();
  console.log(user);
  if (user) {
    if (Object.keys(user).length) {
      dispatch(dateUser(user));
    }
  }


  return (
    <Box position="absolute" w="100%">
      <Box
        display="flex"
        m={2}
        flexDirection={{
          sm: "column",
          md: "column",
          lg: "column",
          xl: "row",
        }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "center",
        }}
      >
        <Image
          w={{ base: 150, sm: 150, md: 300, lg: 300 }}
          ml="0.5rem"
          objectFit="cover"
          src={Logo}
          alt="Dan Abramov"
        />
        <Spacer />
        <Box>
          <Stack
            spacing={4}
            direction={{ base: "column", sm: "column", md: "row" }}
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
        <ButtonGroup
          display="flex"
          flexDirection={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "row",
          }}
        >
          <Link to="/turnos">
            <Button colorScheme="teal" variant="solid">
              Turnos Online
            </Button>
          </Link>

          {!isAuthenticated && (
            <Button
              colorScheme="teal"
              variant="outline"
              onClick={() => {
                loginWithRedirect();
              }}
            >
              Acceder
            </Button>
          )}
          {isAuthenticated && (
            <Menu>
              {({ isOpen }) => (
                <>
                  <MenuButton isActive={isOpen} as={Button}>
                    {isOpen ? (
                      <Icon boxSize={7} as={FaUserCircle} />
                    ) : (
                      <Icon boxSize={7} as={FaUserCircle} />
                    )}
                  </MenuButton>
                  <MenuList>
                    <Link to={`/userProfile/${idUserLogIn}`}>
                      <MenuItem>Ver perfil</MenuItem>
                    </Link>
                    <MenuItem
                      onClick={() =>
                        logout({ returnTo: window.location.origin })
                      }
                    >
                      Cerrar Sesión
                    </MenuItem>
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
              <FormLogin onCloseVentana={onClose} />
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
