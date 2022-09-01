import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Button } from "reactstrap";
import { useState } from "react";
import ArchivedAllDoctors from "./ArchivedAllDoctors";
import ArchivedAllPatients from "./ArchivedAllPatients";
import { FaUserMd, FaUser } from "react-icons/fa";
function ArchivedPanel() {
  const [patients, setPatients] = useState(false);
  const [doctors, setDoctors] = useState(false);

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
              <Button
                onClick={() => {
                  setPatients(true);
                  setDoctors(false);
                }}
              >
                <ListIcon as={FaUser} /> Pacientes
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => {
                  setPatients(false);
                  setDoctors(true);
                }}
              >
                <ListIcon as={FaUserMd} /> Doctores
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          {patients && <ArchivedAllPatients />}
          {doctors && <ArchivedAllDoctors />}
        </Box>
      </Box>
    </>
  );
}

export default ArchivedPanel;
