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
  Tooltip,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { MdPersonAddDisabled } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients, getOnePatient } from "../../../redux/actions";
import PatientDetail from "../../patient/PatientDetail";
import ConfirmDisable from "../doctors/ConfirmDisable";

function AdminAllPatients() {
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state);
  const disableModal = useDisclosure();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [aux, setAux] = useState();

  const visiblePatients = patients; /*.filter((e) => e.activo === true);*/

  useEffect(() => {
    dispatch(getAllPatients());
  }, [dispatch]);

  const handleClick = (id) => {
    console.log(id);
    dispatch(getOnePatient(id));
    onOpen();
  };

  return (
    <>
      <TableContainer>
        <Table size="sm">
          {visiblePatients?.length ? (
            <Thead>
              <Tr>
                <Th isNumeric>ID</Th>
                <Th></Th>
                <Th>Nombre</Th>
                <Th>Email</Th>
                <Th>Obra social</Th>
              </Tr>
            </Thead>
          ) : (
            false
          )}
          <Tbody>
            {visiblePatients ? (
              visiblePatients.map((e) => (
                <Tr key={e.id}>
                  <Td isNumeric>{e.id}</Td>
                  <Td>
                    <Image src={e.picture} w="3rem" h="3rem" rounded={"50%"} />
                  </Td>
                  <Td>{e.fullName}</Td>
                  <Td>{e.email}</Td>
                  <Td>COMPLETAR</Td>
                  <Td>
                    <Button
                      m="0.5rem"
                      colorScheme="teal"
                      size="sm"
                      onClick={() => handleClick(e.id)}
                    >
                      Detalle
                    </Button>

                    <Tooltip label="Deshabilitar">
                      <Button
                        m="0.5rem"
                        colorScheme={"teal"}
                        variant="ghost"
                        fontSize="xs"
                        onClick={() => {
                          dispatch(getOnePatient(e.id));
                          disableModal.onOpen();
                        }}
                      >
                        <ConfirmDisable
                          onClose={disableModal.onClose}
                          isOpen={disableModal.isOpen}
                          setAux={setAux}
                          aux={aux}
                          user="paciente"
                        />
                        <Icon w={4} h={4} as={MdPersonAddDisabled} />
                      </Button>
                    </Tooltip>
                  </Td>
                </Tr>
              ))
            ) : (
              <Alert status="warning">
                <AlertIcon />
                No existen pacientes registrados
              </Alert>
            )}
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
            <PatientDetail id={patients.id} />
          </ModalBody>

          <ModalFooter>
            <Button bg="#2C7A7B" color="white" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AdminAllPatients;
