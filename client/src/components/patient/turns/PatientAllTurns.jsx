import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Icon,
  Text,
  Tooltip,
  Alert,
  AlertIcon,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

import { useEffect } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteTurn,
  getTurnById,
  getTurnsByPatient,
  getHours,
} from "../../../redux/actions";

function PatientAllTurns({ nextTurns, prevTurns, setAuxRender, auxRender }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { turnsByPatient, turnById } = useSelector((state) => state);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getTurnsByPatient(id));
    dispatch(getHours());
  }, [dispatch, auxRender, id]);

  let aux = turnsByPatient;

  aux.forEach((e) => {
    let array = e.date.split("/");

    e.newDate = new Date(
      parseInt(array[2]),
      parseInt(array[1] - 1),
      parseInt(array[0])
    );
  });

  let visibleTurns = nextTurns
    ? aux.filter((e) => e.newDate.getTime() >= new Date().getTime())
    : prevTurns
    ? aux.filter((e) => e.newDate.getTime() < new Date().getTime())
    : turnsByPatient;

  return (
    <>
      <TableContainer>
        <Table size="sm">
          {visibleTurns.length ? (
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Fecha</Th>
                <Th>Hora</Th>
                <Th>Doctor</Th>
                <Th>Especialidad</Th>
                <Th>Pago</Th>
              </Tr>
            </Thead>
          ) : (
            false
          )}
          <Tbody>
            {visibleTurns?.length ? (
              visibleTurns.map((e) => (
                <Tr key={e.id}>
                  <Td isNumeric>{e.id}</Td>
                  <Td>{e.date}</Td>
                  <Td>{e.hours_workings[0].hour}</Td>

                  <Td>{e.doctors?.[0].name}</Td>
                  <Td>{e.doctors[0].general_area.name}</Td>
                  <Td>{e.monto === 0 ? "-" : e.monto}</Td>

                  <Td>
                    <Tooltip label="Cancelar turno">
                      <Button
                        m="0.5rem"
                        colorScheme={"teal"}
                        variant="ghost"
                        fontSize="xs"
                        onClick={() => {
                          dispatch(getTurnById(e.id));
                          setAuxRender(!auxRender);
                          onOpen();
                        }}
                      >
                        <Icon w={4} h={4} as={RiDeleteBin6Line} />
                      </Button>
                    </Tooltip>
                  </Td>
                </Tr>
              ))
            ) : (
              <Box>
                <Alert status="warning">
                  <AlertIcon />
                  {prevTurns && (
                    <Text>No existen turnos previos a la fecha</Text>
                  )}
                  {nextTurns && (
                    <Text>No existen turnos futuros a la fecha</Text>
                  )}
                  {!nextTurns && !prevTurns && (
                    <Text>No existen turnos futuros a la fecha</Text>
                  )}
                </Alert>
              </Box>
            )}
          </Tbody>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancelar turno</ModalHeader>

          <ModalBody>¿Estas seguro que desea cancelar el turno?</ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>

            <Button
              colorScheme="teal"
              onClick={() => {
                onClose();

                dispatch(deleteTurn(turnById.id));
              }}
            >
              Continuar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PatientAllTurns;
