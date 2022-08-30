import React, { useEffect, useState } from "react";
import { DatePicker } from "@material-ui/pickers";
import { Link } from "react-router-dom";

import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Icon,
  Wrap,
  WrapItem,
  Alert,
  AlertIcon,
  AlertDescription,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import {
  getDetailDoctors,
  getHours,
  getTurns,
  postTurn,
  makePayment,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { FcCheckmark } from "react-icons/fc";
import { searchTurnsAvailable } from "./validateTurn";

function Calendar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure(); //modal confirmacion de turno
  const [selectedDate, setDateChange] = useState(""); //cambia fecha en calendario
  const [form, setForm] = useState({});
  const [arrayTurns, setArrayTurns] = useState([]); //horas disponibles a renderizar
  const { idDoctor } = useParams();
  const { hoursWorking, turns } = useSelector((state) => state);
  const doctorDetail = useSelector((state) => state.doctorDetail);
  const usuario = useSelector((state) => state.user);
  console.log(usuario, "usuario");
  //copia de estado global
  const totalHours = hoursWorking;
  const totalTurns = turns;
  const dias = doctorDetail.work_days?.map((e) => parseInt(e.id));
  const hours = doctorDetail.hours_json;

  //////////////////CALENDARIO///////////////////
  //array auxiliar que cambia segun dias del medico
  let aux = [0, 1, 2, 3, 4, 5, 6];
  dias?.forEach((e) => (aux[e] = null)); //--> define como null si el medico trabaja

  //funcion que evalua si el dia actual esta deshabilitado --> retorna el dia proxima habilitado
  const initialDate = (aux) => {
    let date = new Date();
    for (let i = 0; i < aux.length; i++) {
      if (aux[date.getDay()] === null) {
        return date;
      } else {
        date = addDaysToDate(date);
      }
    }
  };
  //funcion que suma un dia a la fecha que se le pasa como parametro
  function addDaysToDate(date) {
    date.setDate(date.getDate() + 1);
    return date;
  }
  //////////////////////////////////////////

  useEffect(() => {
    dispatch(getDetailDoctors(idDoctor));
    dispatch(getHours());

    setForm({ ...form, idDoctor: idDoctor });
    dispatch(getTurns());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    form.idPatient = usuario.id;
    console.log(form);
    dispatch(postTurn(form));
    onOpen();
  };

  const handleChangeCalendar = (date) => {
    //cambio fecha
    setDateChange(date);
    setForm({ ...form, date: date.toLocaleDateString() });
    //validaciones horas disponibles
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
      {hours && (
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
          {true && (
            <Box mt={{ base: "2rem", sm: "2rem", md: "2rem", lg: "0" }}>
              <Text fontSize="2xl">
                2. Seleccionar fecha{" "}
                {form.date && <Icon ml={1} as={FcCheckmark} />}
              </Text>

              <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => handleChangeCalendar(date)}
                  disablePast
                  autoOk
                  variant="static"
                  initialFocusedDate={initialDate(aux)}
                  shouldDisableDate={(date) =>
                    date.getDay() === aux?.[0] ||
                    date.getDay() === aux?.[1] ||
                    date.getDay() === aux?.[2] ||
                    date.getDay() === aux?.[3] ||
                    date.getDay() === aux?.[4] ||
                    date.getDay() === aux?.[5] ||
                    date.getDay() === aux?.[6]
                  }
                />
              </Box>
            </Box>
          )}

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
            {form.date && arrayTurns.length ? (
              <Wrap justify={"center"} mt={"1rem"}>
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
            ) : (
              false
            )}
            {form.date && arrayTurns.length === 0 ? (
              <Alert status="error">
                <AlertIcon />
                <AlertDescription>
                  No hay turnos disponibles para el día {form.date}
                </AlertDescription>
              </Alert>
            ) : (
              false
            )}
          </Box>
        </Box>
      )}
      <Box display={"flex"} justifyContent="end" mr="3rem">
        <Button
          isDisabled={!form.idHour}
          m="1rem"
          colorScheme={"teal"}
          onClick={(e) => handleSubmit(e)}
        >
          Confirmar Turno
        </Button>
        <Link to="/payments">
          <Button isDisabled={!form.idHour} m="1rem" colorScheme={"teal"}>
            {" "}
            Pagar{" "}
          </Button>
        </Link>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirmar turno</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List>
              <ListItem>Doctor: </ListItem>
              <ListItem>Fecha: {form.date}</ListItem>
              <ListItem>Hora: </ListItem>
              <ListItem>Costo consulta: </ListItem>
              <ListItem>Descuento por obra social: </ListItem>
            </List>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Calendar;
