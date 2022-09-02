import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
  Box,
  Wrap,
  Image,
  Text,
  useDisclosure,
  Heading,
  Avatar,
  Spacer,
  Center,
  Flex,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import DoctorDetail from "./DoctorDetail";
import { useAuth0 } from "@auth0/auth0-react";

import { getDetailDoctors } from "../redux/actions";
import { useDispatch } from "react-redux";

export default function DoctorCard({
  id,
  picture,
  name,
  general_area,
  specialty,
}) {
  const dispatch = useDispatch();

  const { user, logout, isAuthenticated, loginWithRedirect } = useAuth0();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const OverlayTwo = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const [overlay, setOverlay] = useState(<OverlayOne />);

  const notVerificadeModal = useDisclosure();
  const notAuthenticatedModal = useDisclosure();
  const modal = useDisclosure();

  //-----Estilos para modo oscuro----//

  const bgselec = useColorModeValue("#319795", "#A0AEC0");
  const colorLetra = useColorModeValue("white", "#000000");

  //---------------------------------//

  return (
    <>
      <Box
        m="3rem"
        w={"18rem"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Image
          h={"100px"}
          w={"100%"}
          src={
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAAFLCAMAAAAdwbUmAAAAA1BMVEX///+nxBvIAAAASElEQVR4nO3BMQEAAADCoPVPbQlPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuBsXTAAGdBi/eAAAAAElFTkSuQmCC"
          }
          objectFit={"cover"}
        />
        <Flex justify={"center"} mt={-12}>
          <Avatar
            size={"xl"}
            src={picture}
            alt={"Author"}
            css={{
              border: "2px solid white",
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={1} align={"center"}>
            <Heading
              textAlign="center"
              mb={"2rem"}
              fontSize={"2xl"}
              fontWeight={350}
              fontFamily={"body"}
            >
              {name}
            </Heading>
            <Text h={"5rem"} textAlign="center" color={"gray.500"}>
              {general_area} - {specialty}
            </Text>
          </Stack>

          <Button
            colorScheme="teal"
            variant="solid"
            onClick={() => {
              dispatch(getDetailDoctors(id));
              modal.onOpen();
            }}
            w={"full"}
            color={colorLetra}
            rounded={"md"}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
            bg={bgselec}
          >
            Leer más
          </Button>

          {isAuthenticated && user.email_verified ? (
            <Link to={`/calendar/${id}`}>
              <Button
                onClick={() => dispatch(getDetailDoctors(id))}
                mt={"1rem"}
                colorScheme="teal"
                variant="solid"
                w={"full"}
                rounded={"md"}
                _hover={{
                  transform: "translateY(-2px)",
                  boxShadow: "lg",
                }}
                color={colorLetra}
                bg={bgselec}
              >
                Pedir turno
              </Button>
            </Link>
          ) : (
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={() =>
                isAuthenticated
                  ? user.email_verified
                    ? true
                    : notVerificadeModal.onOpen()
                  : notAuthenticatedModal.onOpen()
              }
              mt={"1rem"}
              w={"full"}
              rounded={"md"}
              _hover={{
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              color={colorLetra}
              bg={bgselec}
            >
              Pedir turno
            </Button>
          )}
        </Box>
      </Box>

      <Modal
        isCentered
        isOpen={notVerificadeModal.isOpen}
        onClose={notVerificadeModal.onClose}
        colorScheme="teal"
        w="100%"
      >
        {overlay}
        <ModalContent bgColor="green.50" w="80%">
          <ModalHeader color="#C53030">Ups!!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text color="#C53030">Debes verificar el email</Text>
          </ModalBody>
          <ModalFooter>
            <Spacer />
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal
        isCentered
        isOpen={notAuthenticatedModal.isOpen}
        onClose={notAuthenticatedModal.onClose}
        colorScheme="teal"
        w="100%"
      >
        {overlay}
        <ModalContent bgColor="green.50" w="80%">
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

      <Modal isOpen={modal.isOpen} onClose={modal.onClose}>
        <ModalOverlay />
        <ModalContent bg="#EBF8FF">
          <ModalHeader
            fontSize={"2xl"}
            textAlign="center"
            color="#2C7A7B"
            fontFamily={"body"}
          >
            {" "}
            {name}
          </ModalHeader>

          <ModalBody>
            <DoctorDetail id={id} />
          </ModalBody>

          <ModalFooter>
            <Link to="/opiniones">
              <Button colorScheme={"teal"} variant="ghost">
                Ver comentarios
              </Button>
            </Link>
            <Button bg="#2C7A7B" color="white" mr={3} onClick={modal.onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
