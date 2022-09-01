/*
model: ausencias
    id   /  extendida   /  totalDay / notTotalDay --> JSON ---> RELACION CON ID MEDICO
    1     {inicio: "", fin:""}  / {fecha: "", }    /  {fecha: "", horas: []}
*/
//get --> [{ausencia -extendida: {}, caso particular: null, caso 2: null},{}]

/*  id    / name  / costo consulta ---> relacion: doctor 

/* id  / name / discount 
                0.5*/

import { Radio, RadioGroup, Stack, Box, Select,List, ListItem, Button, Icon } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHours } from "../../../redux/actions";
import { KeyboardDatePicker } from "@material-ui/pickers";
import { AiOutlineClose } from "react-icons/ai";

function DoctorFormAbsent() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { hoursWorking } = useSelector((state) => state);
  let aux = [0, 1, 2, 3, 4, 5, 6];
  const [selectedDateStart, setSelectedDateStart] = useState(new Date()); //cambia fecha en calendario
  const [selectedDateEnd, setSelectedDateEnd] = useState(selectedDateStart);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedNotTotalDay, setSelectedNotTotalDay] = useState(new Date());

  useEffect(() => {
    dispatch(getHours());
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
//funcion que evalua si el dia actual esta deshabilitado --> retorna el dia proxima habilitado
// const initialDate = (aux) => {
//   let date = new Date();
//   for (let i = 0; i < aux.length; i++) {
//     if (aux[date.getDay()] === null) {
//       return date;
//     } else {
//       date = addDaysToDate(date);
//     }
//   }
// };

  const handleChangeCalendarStart = (date) => {
    //cambio fecha
    setSelectedDateStart(date);
    setForm({ ...form, extended: {...form.extended, start: date.toLocaleDateString()}});
    
  };

  const handleChangeCalendarEnd = (date) => {
    //cambio fecha
    setSelectedDateEnd(date);
    setForm({ ...form, extended: {...form.extended, end: date.toLocaleDateString()}});
  };

  const handleChangeCalendar = (date) => {
    //cambio fecha
    setSelectedDate(date);
    setForm({ ...form, totalDay: {...form.totalDay, date: date.toLocaleDateString()}});
  };

  const handleChangeCalendarNotTotalDay = (date) => {
    //cambio fecha
    setSelectedNotTotalDay(date);
    setForm({ ...form, notTotalDay: {...form.notTotalDay, date: date.toLocaleDateString()}});
  };

  const handleDeleteHour = (hour) => {
    setForm({
      ...form,
      notTotalDay: { hours: form.notTotalDay.hours?.filter((c) => c !== hour)},
    });
  };

  const handleChangeList = (e) => {
    let search = form.notTotalDay.hours?.find(
      (element) => element === e.target.value
    );
    if (!search && e.target.value !== "") {
      setForm({
        ...form,
        notTotalDay: {...form.notTotalDay,hours:[...form.notTotalDay.hours, e.target.value]},
      });
    }
  };

  return (
    <>
      <RadioGroup onChange={(value) => handleChange(value)}>
        <Stack direction="row">
          <Radio value="extended" name="extended">
            Licencia/Vacaciones
          </Radio>
          <Radio value="notTotalDay" name="notTotalDay">
            Ausencia breve
          </Radio>
          <Radio value="totalDay" name="totalDay">
            Ausencia día completo
          </Radio>
        </Stack>
      </RadioGroup>
      {form.extended &&
      <>
        <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
           <KeyboardDatePicker
             clearable
             value={selectedDateStart}
             placeholder="INICIO"
             disablePast
             onChange={date => handleChangeCalendarStart(date)}
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
         onChange={date => handleChangeCalendarEnd(date)}
         format="dd/MM/yyyy"
         variant="inline"
         autoOk
         minDate={selectedDateStart}
       />
       </Box>
   </>
  }
  {
    form.totalDay &&
    <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
           <KeyboardDatePicker
             clearable
             value={selectedDate}
             disablePast
             onChange={date => handleChangeCalendar(date)}
             format="dd/MM/yyyy"
             variant="static" 
             autoOk
      />
      </Box>
  }
  {
    form.notTotalDay &&
    <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
           <KeyboardDatePicker
             clearable
             value={selectedNotTotalDay}
             disablePast
             onChange={date => handleChangeCalendarNotTotalDay(date)}
             format="dd/MM/yyyy"
             variant="static" 
             autoOk
           />
          <Select
            name="hours"
            onChange={(e) => handleChangeList(e)}
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
  }
    </>
  );
}

export default DoctorFormAbsent;
