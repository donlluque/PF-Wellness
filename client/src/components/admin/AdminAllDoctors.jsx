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
} from "@chakra-ui/react";
import { MdOutlineEditNote } from "react-icons/md";
function AdminAllDoctors() {
  return (
    <>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th isNumeric>ID</Th>
              <Th>Nombre</Th>
              <Th>Área</Th>
              <Th>Especialidad</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td isNumeric>1</Td>
              <Td>Juana Romero</Td>
              <Td>Traumatologa</Td>
              <Td>Rodilla</Td>
              <Td>
                <Button>Detalle</Button>
                <Button>
                  <Icon as={MdOutlineEditNote} />
                </Button>
                <Button>X</Button>
              </Td>
            </Tr>
          </Tbody>
          <Tfoot></Tfoot>
        </Table>
      </TableContainer>
    </>
  );
}

export default AdminAllDoctors;
