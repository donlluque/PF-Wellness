import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import {
  getDoctors,
  filterDoctors,
  cleanError,
  getPrepaidHealth,
} from "../redux/actions";
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
  const { prepaidHealth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(filterDoctors(values));
    dispatch(getPrepaidHealth());
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
    <Box>
      <Box
        w="100vw"
        display="flex"
        flexDirection="column"
        alignItems={"center"}
      >
        <Box w={{ base: "80%", lg: "50%" }}>
          <SearchBar
            setFilterActive={setFilterActive}
            setInput={setInput}
            setPage={setPage}
            onOpen={onOpen}
          />
        </Box>

        <Box
          w={{ sm: "70%", lg: "50%" }}
          display="flex"
          flexDirection={{ base: "column", sm: "column", md: "row", lg: "row" }}
          justifyContent="space-evenly"
          alignItems={"center"}
        >
          <Select
            m="1rem"
            ml={{ sm: 0 }}
            cursor="pointer"
            bg={"teal.200"}
            color="teal.700"
            onChange={(e) => handleFilter(e)}
            value={values.especialidad}
            name="especialidad"
          >
            <option value="All">Areas Generales</option>
            <option value="Deportología">Deportología</option>
            <option value="Fisioterapia y kinesiología">
              Kinesiología y Fisioterapia
            </option>
            <option value="Osteopatía">Osteopatía</option>
            <option value="Quiropraxia">Quiropraxia</option>
            <option value="Reumatología">Reumatología</option>
            <option value="Terapia de dolor">Terapia de Dolor</option>
            <option value="Traumatología">Traumatología</option>
          </Select>

          <Select
            m="1rem"
            ml={{ sm: 0 }}
            bg={"teal.200"}
            color="teal.700"
            onChange={(e) => handleFilter(e)}
            value={values.obrasocial}
            name="obrasocial"
            cursor="pointer"
          >
            <option value="All">Prestaciones</option>
            {prepaidHealth &&
              prepaidHealth.map((e) => (
                <option value={e.name}>{e.name}</option>
              ))}
          </Select>
          {filterActive && (
            <IconButton
              w="3rem"
              m="1rem"
              onClick={(e) => handleClick(e)}
              aria-label="Search database"
              icon={<GiAnticlockwiseRotation />}
            />
          )}
        </Box>
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
