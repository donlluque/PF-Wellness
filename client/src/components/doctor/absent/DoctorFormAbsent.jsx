/*
model: ausencias
    id   /  extendida   /  totalDay / notTotalDay --> JSON ---> RELACION CON ID MEDICO
    1     {inicio: "", fin:""}  / {fecha: "", }    /  {fecha: "", horas: []}
*/
//get --> [{ausencia -extendida: {}, caso particular: null, caso 2: null},{}]

/*  id    / name  / costo consulta ---> relacion: doctor 

/* id  / name / discount 
                0.5*/

import {
  Radio,
  RadioGroup,
  Stack,
  Box,
  Select,
  List,
  ListItem,
  Button,
  Icon,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHours, postAbsentDoctor } from "../../../redux/actions";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { AiOutlineClose } from "react-icons/ai";
import { Container } from "reactstrap";
import { useParams } from "react-router-dom";

function DoctorFormAbsent() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { hoursWorking } = useSelector((state) => state);
  const { id } = useParams();

  const [selectedDateStart, setSelectedDateStart] = useState(new Date()); //cambia fecha en calendario
  const [selectedDateEnd, setSelectedDateEnd] = useState(selectedDateStart);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNotTotalDay, setSelectedNotTotalDay] = useState(new Date());

  useEffect(() => {
    dispatch(getHours());
    setForm({ ...form, doctorId: id });
  }, [dispatch]);

  const handleChange = (e) => {
    if (e === "totalDay") {
      setForm({ [e]: { date: "" } });
    } else if (e === "notTotalDay") {
      setForm({ [e]: { date: "", hours: [] } });
    } else if (e === "extended") {
      setForm({ [e]: { start: "", end: "" } });
    }
  };

  const handleChangeCalendarStart = (date) => {
    //cambio fecha
    setSelectedDateStart(date);
    setForm({
      ...form,
      extended: { ...form.extended, start: date.toLocaleDateString() },
    });
  };

  const handleChangeCalendarEnd = (date) => {
    //cambio fecha
    setSelectedDateEnd(date);
    setForm({
      ...form,
      extended: { ...form.extended, end: date.toLocaleDateString() },
    });
  };

  const handleChangeCalendar = (date) => {
    //cambio fecha
    setSelectedDate(date);
    setForm({
      ...form,
      totalDay: { ...form.totalDay, date: date.toLocaleDateString() },
    });
  };

  const handleChangeCalendarNotTotalDay = (date) => {
    //cambio fecha
    setSelectedNotTotalDay(date);
    setForm({
      ...form,
      notTotalDay: { ...form.notTotalDay, date: date.toLocaleDateString() },
    });
  };

  const handleDeleteHour = (hour) => {
    setForm({
      ...form,
      notTotalDay: { hours: form.notTotalDay.hours?.filter((c) => c !== hour) },
    });
  };

  const handleChangeList = (e) => {
    let search = form.notTotalDay.hours?.find(
      (element) => element === e.target.value
    );
    if (!search && e.target.value !== "") {
      setForm({
        ...form,
        notTotalDay: {
          ...form.notTotalDay,
          hours: [...form.notTotalDay.hours, e.target.value],
        },
      });
    }
  };

  return (
    <>
      <RadioGroup
        onChange={(value) => handleChange(value)}
        m="1rem"
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        alignItems="center"
        justifyContent={"center"}
      >
        <Radio value="extended" name="extended" m="0.5rem">
          Licencia/Vacaciones
        </Radio>
        <Radio value="totalDay" name="totalDay" m="0.5rem">
          Ausencia día completo
        </Radio>
        <Radio value="notTotalDay" name="notTotalDay" m="0.5rem">
          Ausencia breve
        </Radio>
      </RadioGroup>
      {form.extended && (
        <>
          <Box
            m="1rem"
            boxShadow={"2xl"}
            rounded={"md"}
            display="flex"
            flexDirection={{
              base: "column",
              sm: "column",
              md: "column",
              lg: "row",
              xl: "row",
            }}
            justifyContent="center"
            alignItems={"center"}
          >
            <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
              <KeyboardDatePicker
                clearable
                value={selectedDateStart}
                placeholder="Inicio"
                disablePast
                onChange={(date) => handleChangeCalendarStart(date)}
                minDate={new Date()}
                format="dd/MM/yyyy"
                variant="inline"
                autoOk
              />
            </Box>
            <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
              <KeyboardDatePicker
                clearable
                value={selectedDateEnd}
                placeholder="FIN"
                disablePast
                onChange={(date) => handleChangeCalendarEnd(date)}
                format="dd/MM/yyyy"
                variant="inline"
                autoOk
                minDate={selectedDateStart}
                disabled={
                  form.extended && form.extended.start !== "" ? false : true
                }
              />
            </Box>
          </Box>
        </>
      )}
      {form.totalDay && (
        <Container>
          <KeyboardDatePicker
            value={selectedDate}
            disablePast
            onChange={(date) => handleChangeCalendar(date)}
            format="dd/MM/yyyy"
            variant="static"
            autoOk
          />
        </Container>
      )}
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        {form.notTotalDay && (
          <Box
            m="1rem"
            boxShadow={"2xl"}
            rounded={"md"}
            w={{ sd: "20rem", md: "20rem", lg: "20rem", xl: "20rem" }}
          >
            <KeyboardDatePicker
              value={selectedNotTotalDay}
              disablePast
              onChange={(date) => handleChangeCalendarNotTotalDay(date)}
              format="dd/MM/yyyy"
              variant="static"
              autoOk
            />
          </Box>
        )}

        {form.notTotalDay && form.notTotalDay.date && (
          <Box m="1rem">
            <Select
              name="hours"
              onChange={(e) => handleChangeList(e)}
              bg="white"
            >
              <option>Seleccionar horario</option>
              {hoursWorking &&
                hoursWorking.map((h) => (
                  <option key={h.id} value={h.hour}>
                    {h.hour}
                  </option>
                ))}
            </Select>
            <List display="inline-flex" flexDirection={"row"} flexWrap="wrap">
              {form.notTotalDay.hours?.length
                ? form.notTotalDay.hours.map((e) => (
                    <ListItem m="1rem" key={e}>
                      {e}
                      <Button
                        colorScheme={"teal"}
                        variant={"ghost"}
                        cursor="pointer"
                        onClick={() => handleDeleteHour(e)}
                      >
                        <Icon as={AiOutlineClose} />
                      </Button>
                    </ListItem>
                  ))
                : []}
            </List>
          </Box>
        )}
      </Box>
      {(form.extended || form.notTotalDay || form.totalDay) && (
        <Button
          colorScheme={"teal"}
          onClick={() => dispatch(postAbsentDoctor(form))}
          isDisabled={
            (form.extended && form.extended.end === "") ||
            (form.notTotalDay && !form.notTotalDay.hours?.length) ||
            (form.totalDay && form.totalDay.date === "")
          }
        >
          Confirmar
        </Button>
      )}
    </>
  );
}

export default DoctorFormAbsent;
