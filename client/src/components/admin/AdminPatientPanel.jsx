import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

import { FiFilter } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Button } from "reactstrap";
import { useState } from "react";
import AdminAllPatients from "./AdminAllPatients";

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
        <Box w={{ xl: "30%" }}>
          <Heading as="h6">Menu</Heading>
          <Divider colorScheme={"teal"} />
          <List m="2rem" spacing={5}>
            <ListItem>
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
              <Button
                onClick={() => {
                  setListPatients(true);
                  setFilter(true);
                }}
              >
                <ListIcon as={FiFilter} /> Filtrar
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "70%" }}>
          {filter && <Text>PROXIMAMENTE</Text>}

          {listPatients && <AdminAllPatients />}
        </Box>
      </Box>
    </>
  );
}

export default AdminPatientPanel;
