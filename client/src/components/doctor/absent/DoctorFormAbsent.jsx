/*
model: ausencias
    id   /  extendida   /  totalDay / notTotalDay --> JSON ---> RELACION CON ID MEDICO
    1     {inicio: "", fin:""}  / {fecha: "", }    /  {fecha: "", horas: []}
*/
//get --> [{ausencia -extendida: {}, caso particular: null, caso 2: null},{}]

/*  id    / name  / costo consulta ---> relacion: doctor 

/* id  / name / discount 
                0.5*/

import { Radio, RadioGroup, Stack, Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHours } from "../../../redux/actions";
import { DatePicker } from "@material-ui/pickers";
function DoctorFormAbsent() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { hoursWorking } = useSelector((state) => state);
  let aux = [0, 1, 2, 3, 4, 5, 6];
  const [selectedDate, setDateChange] = useState(""); //cambia fecha en calendario

  useEffect(() => {
    dispatch(getHours());
  }, [dispatch]);

  const handleChange = (e) => {
    if (e === "totalDay") {
      setForm({ [e]: { fecha: "" } });
    } else if (e === "notTotalDay") {
      setForm({ [e]: { fecha: "", hours: [] } });
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
  
  const handleChangeCalendar = (date) => {
    //cambio fecha
    setDateChange(date);
    setForm({ ...form, date: date.toLocaleDateString() });
    //validaciones horas disponibles
    //setArrayTurns(searchTurnsAvailable(hours, totalHours, totalTurns, date));
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
          <Box m="1rem" boxShadow={"2xl"} rounded={"md"}>
                <DatePicker
                  value={selectedDate}
                  onChange={(date) => handleChangeCalendar(date)}
                  disablePast
                  autoOk
                  variant="static"
                  shouldDisableDate={(date) =>
                    date.getDay() !== 1 &&
                    date.getDay() !== 2 &&
                    date.getDay() !== 3 &&
                    date.getDay() !== 4 &&
                    date.getDay() !== 5
                  }
                />
              </Box>}
    </>
  );
}

export default DoctorFormAbsent;
