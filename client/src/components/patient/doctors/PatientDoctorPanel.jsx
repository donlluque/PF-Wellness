import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
} from "@chakra-ui/react";

import { FiFilter } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { Button } from "reactstrap";
import { useState } from "react";
import PatientAllDoctors from "./PatientAllDoctors";
import NavStaff from "../../NavStaff";

function PatientDoctorPanel() {
  const [listDoctors, setListDoctors] = useState(true);
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
              {listDoctors && (
                <ListIcon as={AiFillCaretRight} color="teal.500" />
              )}
              <Button
                onClick={() => {
                  setListDoctors(true);

                  setFilter(false);
                }}
              >
                <ListIcon as={BsFillPersonLinesFill} /> Mis Doctores
              </Button>
            </ListItem>

            <ListItem>
              {filter && <ListIcon as={AiFillCaretRight} color="teal.500" />}
              <Button
                onClick={() => {
                  setListDoctors(true);
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
          {filter && <NavStaff />}

          {listDoctors && <PatientAllDoctors />}
        </Box>
      </Box>
    </>
  );
}

export default PatientDoctorPanel;
