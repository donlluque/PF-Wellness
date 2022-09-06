import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { Button } from "reactstrap";
import { BsCalendarCheck, BsCalendar3, BsCalendarEvent } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import { useState } from "react";
import PatientAllTurns from "./PatientAllTurns";

function PatientTurnsPanel() {
  const [nextTurns, setNextTurns] = useState(true);
  const [prevTurns, setPrevTurns] = useState(false);
  //const [listTurns, setListTurns] = useState(GiTruce);
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
              {nextTurns && <ListIcon as={AiFillCaretRight} color="teal.500" />}
              <Button
                onClick={() => {
                  setNextTurns(true);
                  setPrevTurns(false);
                  setFilter(false);
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
                  setFilter(false);
                }}
              >
                <ListIcon as={BsCalendarCheck} /> Historial
              </Button>
            </ListItem>
            <ListItem>
              {!nextTurns && !prevTurns && (
                <ListIcon as={AiFillCaretRight} color="teal.500" />
              )}
              <Button
                onClick={() => {
                  setNextTurns(false);
                  setPrevTurns(false);
                  setFilter(false);
                }}
              >
                <ListIcon as={BsCalendar3} /> Ver todos
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          <PatientAllTurns nextTurns={nextTurns} prevTurns={prevTurns} />
        </Box>
      </Box>
    </>
  );
}

export default PatientTurnsPanel;
