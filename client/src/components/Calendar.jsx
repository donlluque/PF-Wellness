//import { useState } from "react";
//import ReactDatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import React, { Fragment, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { Box, Center, Heading, Text } from "@chakra-ui/react";

function Calendar() {
  const [selectedDate, setDateChange] = useState(new Date());

  return (
    <>
      <Center bgColor="teal.50" h="50vh">
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "xl", sm: "3xl", md: "4xl", lg: "5xl" }}
          m="1rem"
        >
          Seleccionar turno
        </Heading>
      </Center>
      <Box>
        <Text>1. Seleccionar fecha</Text>
      </Box>
      <Box>
        <KeyboardDatePicker
          value={selectedDate}
          onChange={setDateChange}
          disablePast
          variant="static"
          shouldDisableDay={6}
        />
      </Box>
    </>
  );
}

export default Calendar;
