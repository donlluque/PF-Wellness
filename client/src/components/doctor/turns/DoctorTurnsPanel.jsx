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

import { AiOutlineSearch } from "react-icons/ai";
import { BsCalendarCheck, BsCalendar3, BsCalendarEvent } from "react-icons/bs";
import { useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

import DoctorAllTurns from "./DoctorAllTurns";

function DoctorTurnsPanel() {
  const [nextTurns, setNextTurns] = useState(true);
  const [prevTurns, setPrevTurns] = useState(false);
  const [auxRender, setAuxRender] = useState(false);

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
              {nextTurns && <ListIcon as={AiFillCaretRight} color="teal.500" />}
              <Button
                onClick={() => {
                  setNextTurns(true);
                  setPrevTurns(false);
                }}
              >
                <ListIcon as={BsCalendarEvent} /> Próximos turnos
              </Button>
            </ListItem>
            <ListItem>
              {prevTurns && <ListIcon as={AiFillCaretRight} color="teal.500" />}
              <Button
                onClick={() => {
                  setNextTurns(false);
                  setPrevTurns(true);
                }}
              >
                <ListIcon as={BsCalendarCheck} /> Historial
              </Button>
            </ListItem>
            <ListItem>
              {!prevTurns && !nextTurns && (
                <ListIcon as={AiFillCaretRight} color="teal.500" />
              )}
              <Button
                onClick={() => {
                  setNextTurns(false);
                  setPrevTurns(false);
                }}
              >
                <ListIcon as={BsCalendar3} /> Ver todos
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          <DoctorAllTurns
            setAuxRender={setAuxRender}
            auxRender={auxRender}
            nextTurns={nextTurns}
            prevTurns={prevTurns}
          />
        </Box>
      </Box>
    </>
  );
}

export default DoctorTurnsPanel;
