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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Image,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteTurn,
  getOnePatient,
  getTurns,
  getTurnsByDoctor,
} from "../../../redux/actions";
import { TbCalendarOff } from "react-icons/tb";
import { useParams } from "react-router-dom";

/*
- Cuando se haga el post con el idPaciente:
    - agregar nombre paciente
- Cuando se cargue info de pago:
    - agregar alguna columna con info de pago
- Crear filtros en base a lo anterior
- Mandar id por la funcion getTurnsByDoctor(id)
*/

function DoctorAllTurns({ nextTurns, prevTurns }) {
  const dispatch = useDispatch();
  const { turnsByDoctor, user } = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();

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

  const handleClick = (id) => {
    console.log(id);
    //dispatch(getTurnDetail(id)); --> ahcer
    onOpen();
  };

  return (
    <>
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
                  <Td isNumeric>{e.id}</Td>
                  <Td>{e.date}</Td>
                  <Td>{e.hours_workings[0].hour}</Td>
                  <Td>{e.patient[0].name}</Td>
                  <Td>
                    <Button
                      m="0.5rem"
                      colorScheme="teal"
                      size="sm"
                      onClick={() => handleClick(e.id)}
                    >
                      Detalle
                    </Button>

                    <Button
                      m="0.5rem"
                      colorScheme={"teal"}
                      variant="ghost"
                      fontSize="xs"
                      onClick={() => dispatch(deleteTurn(e.id))}
                    >
                      <Icon w={4} h={4} as={TbCalendarOff} />
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bg="#EBF8FF">
          <ModalHeader
            fontSize={"2xl"}
            textAlign="center"
            color="#2C7A7B"
            fontFamily={"body"}
          >
            {" "}
          </ModalHeader>

          <ModalBody>
            PROXIMAMENTE TURN DETAIL
            {/*<PatientDetail id={patients.id} />*/}
          </ModalBody>

          <ModalFooter>
            <Button bg="#2C7A7B" color="white" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DoctorAllTurns;
