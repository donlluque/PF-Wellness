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

function DoctorAllTurns({ nextTurns, prevTurns }) {
  const dispatch = useDispatch();
  const { turnsByDoctor, user } = useSelector((state) => state);

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
                  <Td>{e.hours_workings[0].hour}</Td>
                  <Td>{e.patient[0].name}</Td>
                  <Td>
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
    </>
  );
}

export default DoctorAllTurns;
