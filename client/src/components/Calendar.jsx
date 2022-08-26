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
  postTurn,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import {
  searchTurnByDate,
  searchTurnsAvailable,
  validateRange,
} from "./validateTurn";

function Calendar() {
  const history = useHistory();
  console.log(history);
  const [form, setForm] = useState({});
  const [selectedDate, setDateChange] = useState(new Date());
  const [arrayTurns, setArrayTurns] = useState([]); //[4,5,6,7,10,11,12]
  const dispatch = useDispatch();
  const { idDoctor } = useParams();
  const { doctorDetail, hoursWorking, turns } = useSelector((state) => state);
  const hours = doctorDetail.hours_json;
  const totalHours = hoursWorking;
  const totalTurns = turns;

  useEffect(() => {
    dispatch(getDetailDoctors(idDoctor));
    dispatch(getHours());
    setForm({ ...form, idDoctor: idDoctor });
    dispatch(getTurns());
  }, [dispatch]);

  //const daySelect = selectedDate.toLocaleDateString();
  //const daysNumber = doctorDetail.work_days.map((e) => e.id);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postTurn(form));
  };

  const handleChangeCalendar = (date) => {
    //cambio fecha
    setDateChange(date);
    setForm({ ...form, date: date.toLocaleDateString() });
    //validaciones
    setArrayTurns(searchTurnsAvailable(hours, totalHours, totalTurns, date));
  };

  const handleClick = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Center
        h={{ base: "100vh", sm: "100vh", md: "80vh", lg: "70vh" }}
        //https://parrocchiagrumello.it/wp-content/uploads/2018/03/97079_agenda1.jpg
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.7),
      rgba(230, 255, 250, 0.7)
    ),
    url(https://parrocchiagrumello.it/wp-content/uploads/2018/03/97079_agenda1.jpg)"
        bgRepeat="no-repeat"
      >
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
          m="1rem"
          mt={{ base: "10rem", sm: "10rem", md: "8rem", lg: "5rem" }}
        >
          Turnos Online
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
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "space-around",
        }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
        }}
      >
        <Box>
          <Text fontSize="2xl">
            1. Seleccionar profesional <Icon ml={1} as={FcCheckmark} />
          </Text>
          <Box
            m="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            w={{ base: "90vw", sm: "50vw", md: "50vw", lg: "25vw" }}
            p="1rem"
            boxShadow={"2xl"}
            rounded={"md"}
            overflow={"hidden"}
          >
            <Heading as="h6" size="md" m="1rem">
              {doctorDetail.name}
            </Heading>
            <Text>
              {doctorDetail.general_area} - {doctorDetail.specialty}
            </Text>
            <Text>{doctorDetail.phone}</Text>
          </Box>
          <Button
            w="90%"
            colorScheme={"teal"}
            m="1rem"
            mt="4rem"
            onClick={() => history.goBack(-1)}
          >
            Cambiar profesional
          </Button>
        </Box>
        <Box mt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0" }}>
          <Text fontSize="2xl">
            2. Seleccionar fecha {form.date && <Icon ml={1} as={FcCheckmark} />}
          </Text>

          <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
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
          w={{ base: "90vw", sm: "50vw", md: "50vw", lg: "25vw" }}
          mt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0" }}
        >
          {form.date && (
            <Text fontSize="2xl">
              3. Seleccionar hora{" "}
              {form.idHour && <Icon ml={1} as={FcCheckmark} />}
            </Text>
          )}
          {form.date && (
            <Wrap justify={"center"} mt={"1rem"}>
              {/*horasPrueba &&
                turnoPrueba &&
                turnoPrueba.forEach((t) =>
                  horasPrueba.forEach((h) => {
                    if (h.id === t) {
                      array.push(h);
                    }
                  })
                )*/}
              {arrayTurns.map((h) => (
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
          )}
        </Box>
      </Box>
      <Button m="1rem" colorScheme={"teal"} onClick={(e) => handleSubmit(e)}>
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
