import {
  Button,
  Stack,
  ButtonGroup,
  Spacer,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoPf.jpeg";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { dateUser } from "../redux/actions";
import { FaUserCircle } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

function NavBar() {
  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0();
  const [refresh, setRefresh] = useState(false);
  const dispatch = useDispatch();
  const usuario = useSelector((state) => state.user);

  console.log(usuario, "soy iddddddddd");

  //LOGIN NUEVO

  console.log(user, "user de NavBAr");

  useEffect(() => {
    setRefresh(true);
    setRefresh(false);
  }, [usuario]);

  useEffect(() => {
    if (user) {
      if (Object.keys(user).length) {
        console.log(user, "soyu user de NavBar");
        dispatch(dateUser(user));
        // localStorage.setItem("user", JSON.stringify(user));
      }
    }
  }, [user]);

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
            spacing={{ base: 0, sm: 0, md: 4 }}
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
          mt={{ base: "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "0" }}
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
                    <Link
                      to={
                        usuario.length
                          ? `/userProfile/${usuario[0].id}`
                          : `/userProfile/${usuario.id}`
                      }
                    >
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
    </Box>
  );
}

export default NavBar;
