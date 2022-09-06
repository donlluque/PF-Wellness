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
  Text,
  Tooltip,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getTurnsByPatient } from "../../../redux/actions";

function PatientAllTurns({ nextTurns, prevTurns }) {
  const dispatch = useDispatch();
  const { turnsByPatient } = useSelector((state) => state);
  const { id } = useParams();
  // console.log(typeof id, "ID DE TURNS");

  let aux = turnsByPatient;

  aux.forEach((e) => {
    let array = e.date.split("/");

    e.newDate = new Date(
      parseInt(array[2]),
      parseInt(array[1] - 1),
      parseInt(array[0])
    );
  });

  let visibleTurns = nextTurns
    ? aux.filter((e) => e.newDate.getTime() >= new Date().getTime())
    : prevTurns
    ? aux.filter((e) => e.newDate.getTime() < new Date().getTime())
    : turnsByPatient;

  return (
    <>
      <TableContainer>
        <Table size="sm">
          {visibleTurns.length ? (
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Fecha</Th>
                <Th>Hora</Th>
                <Th>Doctor</Th>
                <Th>Especialidad</Th>
              </Tr>
            </Thead>
          ) : (
            false
          )}
          <Tbody>
            {visibleTurns?.length ? (
              visibleTurns.map((e) => (
                <Tr key={e.id}>
                  <Td isNumeric>{e.id}</Td>
                  <Td>{e.date}</Td>
                  <Td>{e.hours_workings[0].hour}</Td>

                  <Td>{e.doctors?.[0].name}</Td>
                  <Td>{e.doctors[0].general_area.name}</Td>

                  <Td>
                    <Tooltip label="Eliminar">
                      <Button
                        m="0.5rem"
                        colorScheme={"teal"}
                        variant="ghost"
                        fontSize="xs"
                      >
                        <Icon w={4} h={4} as={RiDeleteBin6Line} />
                      </Button>
                    </Tooltip>
                  </Td>
                </Tr>
              ))
            ) : (
              <Alert status="warning" w="100%">
                <AlertIcon />
                {prevTurns && <Text>No existen turnos previos a la fecha</Text>}
                {nextTurns && <Text>No existen turnos futuros a la fecha</Text>}
                {!nextTurns && !prevTurns && (
                  <Text>No existen turnos futuros a la fecha</Text>
                )}
              </Alert>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
}

export default PatientAllTurns;
