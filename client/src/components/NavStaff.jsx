import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { getDoctors, filterDoctors, cleanError } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  Select,
  useDisclosure,
  IconButton,
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { GiAnticlockwiseRotation } from "react-icons/gi";

export default function NavStaff({ setInput, setPage }) {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    especialidad: "All",
    obrasocial: "All",
  });
  const [filterActive, setFilterActive] = useState(false);
  const msgError = useSelector((state) => state.msgError);
  console.log(msgError.type === "search");

  useEffect(() => {
    dispatch(filterDoctors(values));
  }, [dispatch, values]);

  function handleFilter(e) {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
    setPage(1);
    setInput(1);
    setFilterActive(true);
    //MENSAJE
    setOverlay(<OverlayOne />);
    onOpen();
  }
  function handleClick(e) {
    e.preventDefault();
    dispatch(getDoctors());
    setFilterActive(false);
    setValues({
      especialidad: "All",
      obrasocial: "All",
    });
  }

  //MENSAJE
  const { isOpen, onOpen, onClose } = useDisclosure();

  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <Box display={"inline-flex"}>
      <SearchBar
        setFilterActive={setFilterActive}
        setInput={setInput}
        setPage={setPage}
        onOpen={onOpen}
      />
      {filterActive && (
        <IconButton
          m="1rem"
          onClick={(e) => handleClick(e)}
          aria-label="Search database"
          icon={<GiAnticlockwiseRotation />}
        />
      )}
      <Box display="inline-flex">
        <Select
          m="1rem"
          bg={"teal.300"}
          color="teal.700"
          onChange={(e) => handleFilter(e)}
          value={values.especialidad}
          name="especialidad"
        >
          <option value="All">Areas Generales</option>
          <option value="deportologia">Deportología</option>
          <option value="fisioterapia y kinesiologia">
            Kinesiología y Fisioterapia
          </option>
          <option value="Osteopatia">Osteopatía</option>
          <option value="quiropraxia">Quiropraxia</option>
          <option value="reumatologia">Reumatología</option>
          <option value="terapia de dolor">Terapia de Dolor</option>
          <option value="traumatologia">Traumatología</option>
        </Select>

        <Select
          m="1rem"
          bg={"teal.300"}
          color="teal.700"
          onChange={(e) => handleFilter(e)}
          value={values.obrasocial}
          name="obrasocial"
        >
          <option value="All">Prestaciones</option>
          <option value="osde">Osde</option>
          <option value="swiss medical">Swiss Medical</option>
          <option value="galeno">Galeno</option>
          <option value="medicus">Medicus</option>
          <option value="parque salud">Parque Salud</option>
          <option value="medife">Medife</option>
        </Select>
      </Box>
      {msgError.type === "filter" && (
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          colorScheme="red"
          closeOnOverlayClick={false}
          isOp
        >
          {overlay}
          <ModalContent bgColor="green.50">
            <ModalHeader color="red.600">Lo sentimos!</ModalHeader>

            <ModalBody>
              <Text color="red.600">
                Actualmente no contamos con un profesional especialista en{" "}
                <Text as="b">{msgError.especialidad}</Text> que trabaje con{" "}
                <Text as="b">{msgError.obrasocial}</Text>
              </Text>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  onClose();
                  dispatch(cleanError());
                  dispatch(getDoctors());
                  setFilterActive(false);
                  setValues({
                    especialidad: "All",
                    obrasocial: "All",
                  });
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
      {msgError.type === "search" && (
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          colorScheme="red"
          closeOnOverlayClick={false}
          isOp
        >
          {overlay}
          <ModalContent bgColor="green.50">
            <ModalHeader color="red.600">Lo sentimos!</ModalHeader>

            <ModalBody>
              <Text color="red.600">{msgError.statusText}</Text>
            </ModalBody>
            <ModalFooter>
              <Button
                onClick={() => {
                  onClose();
                  dispatch(cleanError());
                  dispatch(getDoctors());
                  setFilterActive(false);
                  setValues({
                    especialidad: "All",
                    obrasocial: "All",
                  });
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Box>
  );
}
