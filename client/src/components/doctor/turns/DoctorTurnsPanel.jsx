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

import DoctorAllTurns from "./DoctorAllTurns";

function DoctorTurnsPanel() {
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
            <ListItem>
              <Button
                onClick={() => {
                  setFilter(true);
                }}
              >
                <ListIcon as={AiOutlineSearch} /> Filtrar
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          <DoctorAllTurns nextTurns={nextTurns} prevTurns={prevTurns} />
          {filter && <Text>PROXIMAMENTE</Text>}
        </Box>
      </Box>
    </>
  );
}

export default DoctorTurnsPanel;
