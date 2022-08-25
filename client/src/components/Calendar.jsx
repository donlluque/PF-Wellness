//import { useState } from "react";
//import ReactDatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import React, { Fragment, useEffect, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";

import { Box, Center, Heading, Text, Button } from "@chakra-ui/react";
import { getDetailDoctors, postAppointment } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function Calendar() {
  const [form, setForm] = useState({});
  const [selectedDate, setDateChange] = useState(new Date());
  const dispatch = useDispatch();
  const { idDoctor } = useParams();
  const { doctorDetail } = useSelector((state) => state);
  console.log(idDoctor, doctorDetail);

  useEffect(() => {
    dispatch(getDetailDoctors(idDoctor));
  }, [dispatch]);

  const daySelect = selectedDate.toLocaleDateString();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAppointment(form));
  };

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
        <Text>1. Seleccionar Doctor</Text>
        <Text>{doctorDetail.name}</Text>
      </Box>
      <Box>
        <Text>1. Seleccionar fecha</Text>
      </Box>
      <Box>
        <KeyboardDatePicker
          value={selectedDate}
          onChange={setDateChange}
          disablePast
          autoOk
          orientation="landscape"
          variant="static"
          openTo="date"
          shouldDisableDate={(date) =>
            date.getDay() !== 1 &&
            date.getDay() !== 2 &&
            date.getDay() !== 3 &&
            date.getDay() !== 4 &&
            date.getDay() !== 5
          }
        />
      </Box>
      <Box></Box>
      <Button onSubmit={(e) => handleSubmit(e)}>Confirmar Turno</Button>
    </>
  );
}

export default Calendar;
