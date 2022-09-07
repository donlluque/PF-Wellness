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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  useDisclosure,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteTurn,
  getOnePatient,
  getTurnById,
  getTurns,
  getTurnsByDoctor,
  sendEmailForm,
  sendEmailCancelacion,
} from "../../../redux/actions";
import { TbCalendarOff } from "react-icons/tb";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MdDoneAll } from "react-icons/md";

function DoctorAllTurns({ nextTurns, prevTurns, setAuxRender, auxRender }) {
  const dispatch = useDispatch();
  const { turnsByDoctor, user, turnById } = useSelector((state) => state);
  //const { isOpen, onOpen, onClose } = useDisclosure();
  const modalCancel = useDisclosure();
  const sendEmail = useDisclosure();
  const [value, setValue] = useState();
  const [confirmDelete, setConfirmDelete] = useState(false);

  const { id } = useParams();
  console.log("IDDDD", id);
  let aux = turnsByDoctor;
  console.log("TURNOSSSSSSS", turnById);


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

  console.log("visibleTurns", visibleTurns);
  useEffect(() => {
    dispatch(getTurnsByDoctor(id));
  }, [dispatch, id, auxRender]);



  const handleClick = (e) => {
    console.log(turnById, "TURNO DEL ORTO")
    dispatch(sendEmailForm(turnById)); 
  }

  return (
    <>
      {visibleTurns.length ? (
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Fecha</Th>
                <Th>Hora</Th>
                <Th>Paciente</Th>
              </Tr>
            </Thead>

            <Tbody>
              {visibleTurns &&
                visibleTurns.map((e) => (
                  <Tr key={e.id}>
                    <Td>{e.id}</Td>
                    <Td>{e.date}</Td>
                    <Td>{e.hours_workings[0]?.hour}</Td>
                    <Td>
                      {e.patients.length ? e.patients[0]?.fullName : false}
                    </Td>
                    <Td>
                      <Tooltip label="Cancelar turno">
                        <Button
                          m="0.5rem"
                          colorScheme={"teal"}
                          variant="ghost"
                          fontSize="xs"
                          onClick={() => {
                            modalCancel.onOpen();
                            dispatch(getTurnById(e.id));
                          }}
                        >
                          <Icon w={4} h={4} as={TbCalendarOff} />
                        </Button>
                      </Tooltip>
                      {prevTurns && (
                        <Tooltip label="Paciente atendido">
                          <Button
                            m="0.5rem"
                            colorScheme={"teal"}
                            variant="ghost"
                            fontSize="xs"
                            onClick={() => {
                              sendEmail.onOpen();
                              console.log(e.id, "EHHHHID")
                              dispatch(getTurnById(e.id));
                            }}
                            
                          >
                            <Icon w={4} h={4} as={MdDoneAll} />
                          </Button>
                        </Tooltip>
                      )}
                    </Td>
                  </Tr>
                ))}
            </Tbody>
            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
      ) : (
        <Alert status="warning">
          <AlertIcon />
          {nextTurns && <Text>No se registran turnos próximos a la fecha</Text>}
          {prevTurns && (
            <Text>No se registran turnos anteriores a la fecha</Text>
          )}
          {!nextTurns && !prevTurns && (
            <Text>No se registran turnos otorgados</Text>
          )}
        </Alert>
      )}

      <Modal isOpen={sendEmail.isOpen} onClose={sendEmail.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancelar turno</ModalHeader>
         
          {confirmDelete && (
            <ModalBody>¿Estas seguro que desea cancelar el turno?</ModalBody>
          )}

          <ModalFooter>
            <Button colorScheme="teal" variant="ghost" mr={3} onClick={sendEmail.onClose}>
              Cancelar
            </Button>
            
              <Button
                colorScheme="teal"
                onClick={() => {
                  sendEmail.onClose();
                  dispatch(sendEmailForm(turnById))
                  //setConfirmDelete(false);
                  //dispatch(deleteTurn(turnById.id));
                  //setAuxRender(!auxRender);
                }}
              >
                Notificar al paciente
              </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal isOpen={modalCancel.isOpen} onClose={modalCancel.onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cancelar turno</ModalHeader>
         
          {confirmDelete && (
            <ModalBody>¿Estas seguro que desea cancelar el turno?</ModalBody>
          )}

          <ModalFooter>
            <Button colorScheme="teal" variant="ghost" mr={3} onClick={modalCancel.onClose}>
              Cancelar
            </Button>
            {!confirmDelete && (
              <Button
                colorScheme="teal"
                onClick={() => {
                  setConfirmDelete(true);
                  dispatch(sendEmailCancelacion(turnById));
                }}
              >
                Continuar
              </Button>
            )}
            {confirmDelete && (
              <Button
                colorScheme="teal"
                onClick={() => {
                  modalCancel.onClose();
                  setConfirmDelete(false);
                  dispatch(deleteTurn(turnById.id));
                  setAuxRender(!auxRender);
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
