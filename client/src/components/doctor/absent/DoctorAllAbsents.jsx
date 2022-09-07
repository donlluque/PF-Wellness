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
  Alert,
  AlertIcon,
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { TbCalendarOff } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  cleanConfirm,
  deleteAbsent,
  getAllAbsent,
} from "../../../redux/actions";

function DoctorAllAbsents() {
  const dispatch = useDispatch();
  const { absents, msgConfirm } = useSelector((state) => state);
  const { id } = useParams();
  const [aux, setAux] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(getAllAbsent());
  }, [dispatch, aux]);

  let visibleAbsents = absents?.filter(
    (e) => e.doctors?.[0].id === parseInt(id)
  );

  return (
    <>
      <>
        {visibleAbsents?.length ? (
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th isNumeric>ID</Th>
                  <Th>Tipo</Th>
                  <Th>Fecha</Th>
                  <Th>Horario</Th>
                  <Th></Th>
                </Tr>
              </Thead>

              <Tbody>
                {visibleAbsents &&
                  visibleAbsents.map((e) => (
                    <Tr key={e.id}>
                      <Td isNumeric>{e.id}</Td>
                      <Td>
                        {e.extended
                          ? "Licencia Extendida"
                          : e.totalDay
                          ? "Ausencia día completo"
                          : "Ausencia Breve"}
                      </Td>
                      <Td>
                        {e.extended ? (
                          <Text>
                            {e.extended.start} - {e.extended.end}
                          </Text>
                        ) : e.totalDay ? (
                          e.totalDay?.date
                        ) : (
                          e.notTotalDay?.date
                        )}
                      </Td>
                      <Td>
                        {e.extended ? (
                          "-"
                        ) : e.totalDay ? (
                          "-"
                        ) : (
                          <Text>
                            {e.notTotalDay?.hours?.map((e) => e).join(" - ")}
                          </Text>
                        )}
                      </Td>
                      <Td>
                        <Button
                          m="0.5rem"
                          colorScheme={"teal"}
                          variant="ghost"
                          fontSize="xs"
                          onClick={() => {
                            dispatch(deleteAbsent(e.id));
                            setAux(!aux);
                          }}
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
        ) : (
          <Alert status="warning">
            <AlertIcon />
            No tiene ausencias registradas
          </Alert>
        )}
        <Modal
          isOpen={msgConfirm && msgConfirm.statusText}
          colorScheme="teal"
          bg="teal.50"
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent bg="teal.50">
            <ModalHeader>Registo Eliminado</ModalHeader>
            <ModalBody>
              El registro de la ausencia ha sido eliminado con exito!
            </ModalBody>
            <ModalFooter>
              <Button
                colorScheme={"teal"}
                mr={3}
                onClick={() => {
                  onClose();
                  dispatch(cleanConfirm());
                }}
              >
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </>
  );
}

export default DoctorAllAbsents;
