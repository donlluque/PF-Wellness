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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTurns } from "../../../redux/actions";

function AdminAllTurnos({ prevTurns, nextTurns }) {
  const dispatch = useDispatch();
  const { turns } = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();

  let aux = turns;
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
    : turns;
  console.log(visibleTurns);
  useEffect(() => {
    dispatch(getTurns());
  }, [dispatch]);

  const handleClick = (id) => {
    console.log(id);
    //dispatch(getOnePatient(id));
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
              <Th>Doctor</Th>
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
                  <Td>{e.doctors?.[0].name}</Td>
                  <Td>{e.patients.length ? e.patients[0]?.fullName : false}</Td>
                  <Td>
                    <Button
                      m="0.5rem"
                      colorScheme="teal"
                      size="sm"
                      onClick={() => handleClick(e.id)}
                    >
                      Detalle
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
            PROXIMAMENTE
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

export default AdminAllTurnos;
