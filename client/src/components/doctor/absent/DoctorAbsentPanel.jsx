import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

import { GrAdd } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Button } from "reactstrap";
import { useState } from "react";

import DoctorFormAbsent from "./DoctorFormAbsent";

function DoctorAbsentPanel() {
  const [listAbsents, setListAbsents] = useState(true);
  const [filter, setFilter] = useState(false);
  const [newAbsent, setNewAbsent] = useState(false);
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
                  setNewAbsent(true);
                  setListAbsents(false);
                  setFilter(false);
                }}
              >
                <ListIcon as={GrAdd} /> Nuevo registro
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => {
                  setListAbsents(true);
                  setFilter(false);
                }}
              >
                <ListIcon as={BsFillPersonLinesFill} /> Ver todas
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          {newAbsent && <DoctorFormAbsent />}
          {listAbsents && <Text>Get ausencias</Text>}
        </Box>
      </Box>
    </>
  );
}

export default DoctorAbsentPanel;
