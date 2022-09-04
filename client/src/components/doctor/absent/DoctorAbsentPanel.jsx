import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
} from "@chakra-ui/react";

import { GrAdd } from "react-icons/gr";
import { BsFillPersonLinesFill } from "react-icons/bs";

import { Button } from "reactstrap";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

import DoctorFormAbsent from "./DoctorFormAbsent";
import DoctorAllAbsents from "./DoctorAllAbsents";

function DoctorAbsentPanel() {
  const [listAbsents, setListAbsents] = useState(true);

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
              {newAbsent && <ListIcon as={AiFillCaretRight} color="teal.500" />}
              <Button
                onClick={() => {
                  setNewAbsent(true);
                  setListAbsents(false);
                }}
              >
                <ListIcon as={GrAdd} /> Nuevo registro
              </Button>
            </ListItem>
            <ListItem>
              {listAbsents && (
                <ListIcon as={AiFillCaretRight} color="teal.500" />
              )}
              <Button
                onClick={() => {
                  setListAbsents(true);
                  setNewAbsent(false);
                }}
              >
                <ListIcon as={BsFillPersonLinesFill} /> Ver todas
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          {newAbsent && (
            <DoctorFormAbsent
              setNewAbsent={setNewAbsent}
              setListAbsents={setListAbsents}
            />
          )}
          {listAbsents && <DoctorAllAbsents />}
        </Box>
      </Box>
    </>
  );
}

export default DoctorAbsentPanel;
