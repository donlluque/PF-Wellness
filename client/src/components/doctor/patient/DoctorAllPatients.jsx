import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
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
import { MdOutlineEditNote } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getAllPatients, getOnePatient } from "../../../redux/actions";
import PatientDetail from "../../patient/PatientDetail";

function DoctorAllPatients() {
  const dispatch = useDispatch();
  const { patients } = useSelector((state) => state);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllPatients());
    //dispatch(getPatientsByDoctor(id));
  }, [dispatch]);

  const handleClick = (id) => {
    console.log(id);
    dispatch(getOnePatient(id));
    onOpen();
  };
  return (
    <>
      <>
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
              {patients &&
                patients.map((e) => (
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
    </>
  );
}

export default DoctorAllPatients;
