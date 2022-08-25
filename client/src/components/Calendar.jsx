//import ReactDatePicker from "react-datepicker";
//import "react-datepicker/dist/react-datepicker.css";
import React, { Fragment, useEffect, useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
//import { createTheme } from "@material-ui/core/styles";
//import { ThemeProvider } from "@material-ui/styles";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import {
  getDetailDoctors,
  getHours,
  getTurns,
  postAppointment,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { searchTurnByDate, searchTurnsAvailable } from "./validateTurn";

let horasPrueba = [
  { id: 1, hour: 8 },
  { id: 2, hour: 9 },
  { id: 3, hour: 10 },
  { id: 4, hour: 11 },
];

let turnoPrueba = [1, 3, 4];

function Calendar() {
  const [form, setForm] = useState({});
  const [selectedDate, setDateChange] = useState(new Date());
  const [arrayTurns, setArrayTurns] = useState([]); //[4,5,6,7,10,11,12]
  const dispatch = useDispatch();
  const { idDoctor } = useParams();
  const { doctorDetail, hoursWorking, turns } = useSelector((state) => state);
  const hours = doctorDetail.hours_json;
  console.log(idDoctor, doctorDetail);

  useEffect(() => {
    dispatch(getDetailDoctors(idDoctor));
    dispatch(getHours());
    setForm({ ...form, idDoctor: idDoctor });
    //dispatch(getTurns());
  }, [dispatch]);

  //const daySelect = selectedDate.toLocaleDateString();
  //const daysNumber = doctorDetail.work_days.map((e) => e.id);
  let array = [];
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postAppointment(form));
  };

  const handleChangeCalendar = (date) => {
    //cambio fecha
    setDateChange(date);
    setForm({ ...form, date: date.toLocaleDateString() });
    //validaciones
    //setArrayTurns(searchTurnsAvailable(hours, turns, date)); //[] --> renderizar
  };

  const handleClick = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
      <Box
        pt={"1.5rem"}
        display="flex"
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
        }}
        justifyContent="space-around"
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
        }}
        border="1px solid"
      >
        <Box>
          <Text fontSize="2xl">
            1. Seleccionar Doctor <Icon ml={1} as={FcCheckmark} />
          </Text>
          <Box
            m="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            border="1px solid gray"
            w={{ base: "90vw", sm: "50vw", md: "50vw", lg: "25vw" }}
            p="1rem"
          >
            <Heading as="h6" size="md">
              {doctorDetail.name}
            </Heading>
            <Text>
              {doctorDetail.general_area} - {doctorDetail.specialty}
            </Text>
            <Text>{doctorDetail.phone}</Text>
          </Box>
          <Text></Text>
        </Box>
        <Box>
          <Text fontSize="2xl">2. Seleccionar fecha</Text>

          <Box
            m="1rem"
            w={{ base: "90vw", sm: "50vw", md: "50vw", lg: "25vw" }}
            border="1px solid red"
          >
            <KeyboardDatePicker
              value={selectedDate}
              onChange={(date) => handleChangeCalendar(date)}
              disablePast
              autoOk
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
        </Box>
        <Box
          border="1px solid red"
          w={{ base: "90vw", sm: "50vw", md: "50vw", lg: "25vw" }}
        >
          <Text fontSize="2xl">3. Seleccionar hora</Text>
          <Wrap justify={"center"} mt={"1rem"}>
            {" "}
            {horasPrueba &&
              turnoPrueba &&
              turnoPrueba.forEach((t) =>
                horasPrueba.forEach((h) => {
                  if (h.id === t) {
                    array.push(h);
                  }
                })
              )}
            {array.map((h) => (
              <WrapItem>
                <Button
                  onClick={(e) => handleClick(e)}
                  value={h.id}
                  name="idHour"
                  colorScheme={"teal"}
                  variant="outline"
                  m="0.5rem"
                >
                  {h.hour}
                </Button>
              </WrapItem>
            ))}
          </Wrap>
        </Box>
      </Box>
      <Button colorScheme={"teal"} onSubmit={(e) => handleSubmit(e)}>
        Confirmar Turno
      </Button>
    </>
  );
}

export default Calendar;

/*arrayTurns.forEach((t) =>
  hours.forEach((h) => {
    if (h.id === t) {
      array.push(h);
    }
  })
);*/

/*const prueba = (hours, arrayTurns) => {
  let array = [];
  for (let j = 0; j < hours.length; j++) {
    for (let i = 0; i < arrayTurns.length; i++) {
      if (hours[j].id === arrayTurns[i]) {
        array.push(hours[j]);
      }
    }
  }
  return array;
};*/
