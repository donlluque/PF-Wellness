import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Button } from "reactstrap";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import AdminAllPatients from "./AdminAllPatients";
import SearchBarPatient from "../../patient/SearchBarPatient";

function AdminPatientPanel() {
  const [listPatients, setListPatients] = useState(true);
  const [filter, setFilter] = useState(false);
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        justifyContent="space-around"
      >
        <Box w={{ xl: "25%" }}>
          <Heading as="h6">Menu</Heading>
          <Divider colorScheme={"teal"} />
          <List m="2rem" spacing={5}>
            <ListItem>
              {listPatients && (
                <ListIcon as={AiFillCaretRight} color="teal.500" />
              )}
              <Button
                onClick={() => {
                  setListPatients(true);
                  setFilter(false);
                }}
              >
                <ListIcon as={BsFillPersonLinesFill} /> Pacientes
              </Button>
            </ListItem>
            <ListItem>
              {filter && <ListIcon as={AiFillCaretRight} color="teal.500" />}
              <Button
                onClick={() => {
                  setListPatients(true);
                  setFilter(true);
                }}
              >
                <ListIcon as={AiOutlineSearch} /> Buscar
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          {filter && <SearchBarPatient />}
          {listPatients && <AdminAllPatients />}
        </Box>
      </Box>
    </>
  );
}

export default AdminPatientPanel;
