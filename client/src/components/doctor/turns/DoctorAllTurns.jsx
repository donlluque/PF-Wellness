import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Icon,
  Alert,
  AlertIcon,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Textarea,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteTurn,
  getOnePatient,
  getTurnById,
  getTurns,
  getTurnsByDoctor,
} from "../../../redux/actions";
import { TbCalendarOff } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useState } from "react";

function DoctorAllTurns({ nextTurns, prevTurns }) {
  const dispatch = useDispatch();
  const { turnsByDoctor, user, turnById } = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { id } = useParams();

  let aux = turnsByDoctor;
  aux.forEach((e) => {
    let array = e.date.split("/");
    e.newDate = new Date(
      parseInt(array[2]),
      parseInt(array[1] - 1),
      parseInt(array[0])
    );
  });

  let visibleTurns = nextTurns
    ? aux.filter((e) => e.newDate.getTime() > new Date().getTime())
    : prevTurns
    ? aux.filter((e) => e.newDate.getTime() < new Date().getTime())
    : turnsByDoctor;

  useEffect(() => {
    dispatch(getTurnsByDoctor(id));
  }, [dispatch]);

  //motivo de cancelacion de turno
  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <TableContainer>
        <Table size="sm">
          {visibleTurns?.length ? (
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Fecha</Th>
                <Th>Hora</Th>
                <Th>Paciente</Th>
              </Tr>
            </Thead>
          ) : (
            false
          )}
          <Tbody>
            {visibleTurns.length ? (
              visibleTurns.map((e) => (
                <Tr key={e.id}>
                  <Td isNumeric>{e.id}</Td>
                  <Td>{e.date}</Td>
                  <Td>{e.hours_workings[0]?.hour}</Td>
                  <Td>{e.patients.length ? e.patients[0]?.fullName : false}</Td>
                  <Td>
                    <Button
                      m="0.5rem"
                      colorScheme={"teal"}
                      variant="ghost"
                      fontSize="xs"
                      onClick={() => {
                        onOpen();
                        dispatch(getTurnById(e.id));
                      }}
                    >
                      <Icon w={4} h={4} as={TbCalendarOff} />
                    </Button>
                  </Td>
                </Tr>
              ))
            ) : (
              <Alert status="warning">
                <AlertIcon />
                {nextTurns && (
                  <Text>No se registran turnos próximos a la fecha</Text>
                )}
                {prevTurns && (
                  <Text>No se registran turnos anteriores a la fecha</Text>
                )}
                {!nextTurns && !prevTurns && (
                  <Text>No se registran turnos otorgados</Text>
                )}
              </Alert>
            )}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancelar turno</ModalHeader>
          {!confirmDelete && (
            <ModalBody>
              Motivo de cancelación:
              <Textarea
                value={value}
                onChange={handleValueChange}
                placeholder="Escribe el motivo de la cancelación del turno"
                size="sm"
              />
            </ModalBody>
          )}
          {confirmDelete && (
            <ModalBody>
              ¿Estas seguro que desea cancelar el turno?
              <Textarea
                value={value}
                onChange={handleValueChange}
                placeholder="Escribe el motivo de la cancelación del turno"
                size="sm"
              />
            </ModalBody>
          )}

          <ModalFooter>
            <Button colorScheme="teal" variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            {!confirmDelete && (
              <Button colorScheme="teal" onClick={() => setConfirmDelete(true)}>
                Continuar
              </Button>
            )}
            {confirmDelete && (
              <Button
                colorScheme="teal"
                onClick={() => {
                  onClose();
                  setConfirmDelete(false);
                  dispatch(deleteTurn(turnById.id));
                }}
              >
                Notificar al paciente
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DoctorAllTurns;
