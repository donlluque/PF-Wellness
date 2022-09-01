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
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  ModalOverlay,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logoPf.jpeg";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { dateUser } from "../redux/actions";
import { FaUserCircle } from "react-icons/fa";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
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
        // console.log(user.localhost[0], "soyu user de NavBar");
        dispatch(dateUser(user));
        // localStorage.setItem("user", JSON.stringify(user));
      }
    }
  }, [user]);

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  //-----Estilos para modo oscuro----//
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  const colorLetra = useColorModeValue("#2c7a7b", "#2D3748");
  const botonBg = useColorModeValue("#319795", "#1A202C");
  const colorBt = useColorModeValue("white", "white");
  const schemeBt = useColorModeValue("teal", "black");
  const modo = useColorModeValue("transparent", "transparent");
  const modoColor = useColorModeValue("white", "#D69E2E");
  const modoUser = useColorModeValue("#319795", "#1A202C");
  const bgUser = useColorModeValue("white", "white");
  //----------------------------------//

  return (
    <Box position="absolute" w="100%" border="1px solid red">
      <Box
        display="flex"
        m={2}
        flexDirection={{
          base: "column",
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
          w={{ base: 150, sm: 150, md: 280, lg: 280 }}
          ml="0.5rem"
          objectFit="cover"
          src={Logo}
          alt="Dan Abramov"
        />
        <Spacer />
        <Box>
          <Stack
            spacing={{ base: 0, sm: 0, md: 0 }}
            direction={{ base: "column", sm: "column", md: "row" }}
            align={{ base: "center", sm: "center", md: "row" }}
          >
            <Link to="/">
              <Button colorScheme="teal" variant="ghost" color={colorLetra}>
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button colorScheme="teal" variant="ghost" color={colorLetra}>
                Nosotros
              </Button>
            </Link>
            <Link to="/opiniones">
              <Button colorScheme="teal" variant="ghost">
                Opiniones
              </Button>
            </Link>
            <Link to="/especialidades">
              <Button colorScheme="teal" variant="ghost" color={colorLetra}>
                Especialidades Médicas
              </Button>
            </Link>
            <Link to="/prestaciones">
              <Button colorScheme="teal" variant="ghost" color={colorLetra}>
                Prestaciones
              </Button>
            </Link>
            <Link to="/staff">
              <Button colorScheme="teal" variant="ghost" color={colorLetra}>
                Staff
              </Button>
            </Link>
          </Stack>
        </Box>

        <Spacer />
        <ButtonGroup
          border="1px solid red"
          mt={{ base: "1rem", sm: "1rem", md: "1rem", lg: "1rem", xl: "0" }}
          display="flex"
          flexDirection={{
            base: "row",
            sm: "row",
            md: "row",
            lg: "row",
          }}
        >
          {isAuthenticated ? (
            <Link to="/turnos">
              <Button
                colorScheme={schemeBt}
                variant="solid"
                bg={botonBg}
                color={colorBt}
              >
                Turnos Online
              </Button>
            </Link>
          ) : (
            <Button
              colorScheme={schemeBt}
              variant="solid"
              onClick={onOpen}
              bg={botonBg}
              color={colorBt}
            >
              Turnos Online
            </Button>
          )}
          <Button
            onClick={toggleColorMode}
            colorScheme={modo}
            bg={modo}
            color={modoColor}
          >
            {colorMode === "light" ? (
              <Icon as={BsFillMoonFill} />
            ) : (
              <Icon as={BsFillSunFill} />
            )}
          </Button>
          <Link to="/admin">
            <Button colorScheme={modo} bg={botonBg} color={colorBt}>
              Acceso admin
            </Button>
          </Link>

          {!isAuthenticated && (
            <Button
              colorScheme="teal"
              variant="outline"
              color={modoUser}
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
                  <MenuButton
                    isActive={isOpen}
                    as={Button}
                    bg={modoUser}
                    colorScheme={schemeBt}
                  >
                    {isOpen ? (
                      <Icon boxSize={7} as={FaUserCircle} color={bgUser} />
                    ) : (
                      <Icon boxSize={7} as={FaUserCircle} color={bgUser} />
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

      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        colorScheme="teal"
        w="100%"
      >
        {overlay}
        <ModalContent bgColor="green.50" border="1px solid red" w="80%">
          <ModalHeader color="#C53030">Ups!!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="#C53030">Debes estar registrado</Text>
          </ModalBody>
          <ModalFooter>
            <Spacer />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default NavBar;
