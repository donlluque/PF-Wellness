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
import { MdOutlineEditNote, MdPersonAddDisabled } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { getDetailDoctors, getDoctors, getHours } from "../../../redux/actions";
import DoctorDetail from "../../DoctorDetail";
import ConfirmDisable from "./ConfirmDisable";

function AdminAllDoctors({ setPutDoctor, setListDoctors }) {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { doctors, doctorDetail } = useSelector((state) => state);
  const modal2 = useDisclosure();
  const [aux, setAux] = useState(true);
  const visibleDoctors = doctors.filter((e) => e.activo === true);

  // localStorage.setItem("doctor", JSON.stringify(doctors));
  useEffect(() => {
    dispatch(getDoctors());
    dispatch(getHours());
  }, [dispatch, aux]);

  const handleClick = (id) => {
    console.log(id, "detalles");
    dispatch(getDetailDoctors(id));
    onOpen();
  };

  return (
    <>
      <TableContainer>
        <Table size="sm">
          {visibleDoctors.length ? (
            <Thead>
              <Tr>
                <Th isNumeric>ID</Th>
                <Th></Th>
                <Th>Nombre</Th>
                <Th>Área</Th>
                <Th>Especialidad</Th>
              </Tr>
            </Thead>
          ) : (
            false
          )}
          <Tbody>
            {visibleDoctors.length ? (
              visibleDoctors.map((e) => (
                <Tr key={e.id}>
                  <Td isNumeric>{e.id}</Td>
                  <Td>
                    <Image src={e.picture} w="3rem" h="3rem" rounded={"50%"} />
                  </Td>
                  <Td>{e.name}</Td>
                  <Td>{e.general_area?.name}</Td>
                  <Td>{e.specialty}</Td>
                  <Td>
                    <Button
                      m="0.5rem"
                      colorScheme="teal"
                      size="sm"
                      onClick={() => handleClick(e.id)}
                    >
                      Detalle
                    </Button>

                    <Tooltip label="Editar">
                      <Button
                        m="0.5rem"
                        colorScheme={"teal"}
                        variant="ghost"
                        onClick={() => {
                          setListDoctors(false);
                          setPutDoctor(true);
                        }}
                      >
                        <Icon w={4} h={4} as={MdOutlineEditNote} />
                      </Button>
                    </Tooltip>
                    <Tooltip label="Deshabilitar">
                      <Button
                        m="0.5rem"
                        colorScheme={"teal"}
                        variant="ghost"
                        fontSize="xs"
                        onClick={() => {
                          dispatch(getDetailDoctors(e.id));
                          modal2.onOpen();
                        }}
                      >
                        <ConfirmDisable
                          onClose={modal2.onClose}
                          isOpen={modal2.isOpen}
                          setAux={setAux}
                          aux={aux}
                          user="doctor"
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
                No existen doctores registrados
              </Alert>
            )}
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>

      {/*MODAL DETAIL*/}
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
            {doctorDetail.name}
          </ModalHeader>

          <ModalBody>
            <DoctorDetail id={doctorDetail.id} />
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

export default AdminAllDoctors;
