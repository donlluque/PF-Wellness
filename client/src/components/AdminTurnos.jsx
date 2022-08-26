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
} from "@chakra-ui/react";
import { Button } from "reactstrap";

function AdminTurnos() {
  return (
    <>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th isNumeric>Hora</Th>
              <Th>Doctor</Th>
              <Th>Paciente</Th>
              <Th>Pago</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>8:00</Td>
              <Td>nombre medico</Td>
              <Td>Nombre paciente</Td>
              <Td>Pago</Td>
              <Td>
                <Button>Cancelar</Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminTurnos;
