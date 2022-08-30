/*
model: ausencias
    id   /  extendida   /  totalDay / notTotalDay --> JSON ---> RELACION CON ID MEDICO
    1     {inicio: "", fin:""}  / {fecha: "", }    /  {fecha: "", horas: []}
*/
//get --> [{ausencia -extendida: {}, caso particular: null, caso 2: null},{}]

/*  id    / name  / costo consulta ---> relacion: doctor 

/* id  / name / discount 
                0.5*/

import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getHours } from "../../../redux/actions";

function DoctorFormAbsent() {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const { hoursWorking } = useSelector((state) => state);

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
    </>
  );
}

export default DoctorFormAbsent;
