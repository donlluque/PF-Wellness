import React from "react";
import { searchDoctorByName } from "../../redux/actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IconButton, Input } from "@chakra-ui/react";
import { GrSearch } from "react-icons/gr";
import {
  Spacer,
  Box,
  Modal,
  Text,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export default function SearchBar({
  setInput,
  setPage,
  setFilterActive,
  onOpen,
}) {
  const dispatch = useDispatch();
  const [doctor, setDoctor] = useState("");
  const notActivoModal = useDisclosure();
  function handleChange(e) {
    setDoctor(e.target.value); //el valor del input.
  }

  function handleClick(e) {
    if (doctor) {
      dispatch(searchDoctorByName(doctor));
      setDoctor("");
    } else {
      notActivoModal.onOpen();
    }
    if (setPage && setInput) {
      setPage(1);
      setInput(1);
    }
    setFilterActive(true);
    onOpen();
  }

  return (
    <>
      <Box m="1rem" display="flex" flexDirection="row">
        <Input
          type="text"
          value={doctor}
          placeholder="Buscar Profesional"
          variant="flushed"
          colorScheme={"teal"}
          onChange={(e) => handleChange(e)}
        />
        <IconButton
          onClick={(e) => handleClick(e)}
          aria-label="Search database"
          icon={<GrSearch />}
        />
      </Box>
      <Modal
        isCentered
        isOpen={notActivoModal.isOpen}
        onClose={notActivoModal.onClose}
        colorScheme="teal"
      >
        <ModalOverlay />
        <ModalContent w="80%" bgColor="green.50">
          <ModalCloseButton />
          <ModalBody>
            <Text color="#C53030">Por favor ingrese un profesional</Text>
          </ModalBody>
          <ModalFooter>
            <Spacer />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
