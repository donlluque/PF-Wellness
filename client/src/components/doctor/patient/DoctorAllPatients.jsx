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
  Image,
  Alert,
  AlertIcon,
  useDisclosure,
  CircularProgress,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getAllPatients,
  getOnePatient,
  getTurnsByDoctor,
} from "../../../redux/actions";
import PatientDetail from "../../patient/PatientDetail";

function DoctorAllPatients() {
  const dispatch = useDispatch();
  const { patients, turnsByDoctor } = useSelector((state) => state);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllPatients());
    dispatch(getTurnsByDoctor(id));
  }, [dispatch]);

  let aux = turnsByDoctor?.filter((e) => e.patients.length);
  let aux2 = aux.map((el) => el.patients[0]);

  const visiblePatients = [];
  aux2?.forEach((e) => {
    let search = visiblePatients?.find((d) => d.id == e.id);
    console.log(e.id, "E EN EL FOR EACH");
    if (!search) {
      visiblePatients.push(e);
    }
  });

  const handleClick = (id) => {
    console.log(id);
    dispatch(getOnePatient(id));
    onOpen();
  };
  return (
    <>
      {visiblePatients?.length ? (
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th isNumeric>ID</Th>
                <Th></Th>
                <Th>Nombre</Th>
                <Th>Apellido</Th>
                <Th>Email</Th>
                <Th></Th>
              </Tr>
            </Thead>

            <Tbody>
              {visiblePatients &&
                visiblePatients.map((e) => (
                  <Tr key={e.id}>
                    <Td isNumeric>{e.id}</Td>
                    <Td>
                      <Image
                        src={e.picture}
                        w="3rem"
                        h="3rem"
                        rounded={"50%"}
                      />
                    </Td>
                    <Td>{e.name}</Td>
                    <Td>{e.last_name}</Td>
                    <Td>{e.email}</Td>
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
      ) : (
        <Alert status="warning">
          <AlertIcon />
          Aun no tiene pacientes registrados
        </Alert>
      )}

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
            <PatientDetail id={patients.id} />
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

export default DoctorAllPatients;
