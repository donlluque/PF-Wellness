import {
  Image,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  FormControl,
  Button,
  Box,
  FormErrorMessage,
  Spacer,
  Text,
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
  Radio,
  RadioGroup,
  Stack,
  Heading,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getDays,
  getHours,
  getPrepaidHealth,
  postDoctors,
} from "../../redux/actions.js";
import { validateForm } from "../../hooks/validateForm.js";

/*const doctor = {
  hours: {
    mañana: { inicio: "9:00", fin: "12:00" },
    tarde: { inicio: "15:00", fin: "20:00" },
    todoeldia: {inicio:'9:00', fin:'20:00'}
  },
};
//  HORAS  (8:00 a 20:00hs)
// idhora   /   hora
//   1      / 8:00
//    2     / 8:30
//   3     / 9:00
//    4     / 9:30

//DIAS --> doctor (N:N)     --> idDoctor / id Dia
// idDia   /   dia                1     /   1
//   1      / lunes               1     /   3
//    2     / martes              2     /   2
//   3     / miercoles
//    4     / jueves
//    5    / viernes


//TURNOS
//idturno / fecha /idMedico /idPaciente /idHora

//USUARIO ---> idMedico, FECHA

//horas disponibles = [1,2,3,4,5,6,7,8,9,.....] de 8:00 a 20:00

//getDoctors (idMedico) ---> hours --> comparar inicio/fin de mañana y tarde
//-----> horas disponibles dentro de rango horario de doctor X  --> horad disponibles = [1,2,3,4,.....] mañana: { inicio: "9:00", fin: "12:00" },
    //tarde: { inicio: "15:00", fin: "20:00" },


//getTurnos(fecha, idMedico) --> fecha --> buscar registros que coincidan con la fecha seleecionada del usuario
//horas disponibles --> eliminar horas que coincidan con los turnos 
// idHora en tabla turnos con horas en horas disponibles ---> filtrar en horas disponibles aquellas que coincidan, o sea que esten ocupadas
//horas disponibles = [1,2] --> turnos disponibles que se renderizan: no estan ocupadas y corresponden al rango de atencion del medico
*/
const initialForm = {
  name: "",
  document: "",
  medic_id: "",
  phone: "",
  email: "",
  birthday: "",
  general_area: "",
  specialty: "",
  work_days: [],
  hours_json: {},
  prepaid_healths: [],
};
function FormNewDoctor() {
  const [form, setForm] = useState(initialForm);
  const [formHours, setFormHours] = useState({});
  const dispatch = useDispatch();
  const { msgConfirm, prepaidHealth, hoursWorking, days } = useSelector(
    (state) => state
  );

  const [errors, setErrors] = useState({});
  const date = new Date().toLocaleDateString().split("/").reverse();

  useEffect(() => {
    dispatch(getPrepaidHealth());
    dispatch(getHours());
    dispatch(getDays());
  }, [dispatch]);

  //Define formato fecha actual calendario
  const styleDate = (date) => {
    if (date[1].length === 1) {
      date[1] = "0" + date[1];
    }
    return date.join("-");
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.hours_json = formHours;
    //setErrors(validateForm(form));
    dispatch(postDoctors(form));
    setOverlay(<OverlayOne />);
    onOpen();
    setForm(initialForm);
  };

  const handleBlur = (e) => {
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };
  //seccion horas
  const handleChangeFormHours = (e) => {
    console.log(e);
    if (e === "totalDay") {
      setFormHours({ ...formHours, [e]: { start: "", end: "" } });
    } else {
      setFormHours({
        [e]: {
          morning: { start: "", end: "" },
          afternoon: { start: "", end: "" },
        },
      });
    }
  };
  const handleChangeFormHoursTotalDay = (e) => {
    setFormHours({
      ...formHours,
      totalDay: { ...formHours.totalDay, [e.target.name]: e.target.value },
    });
  };
  const handleChangeFormHoursMorning = (e) => {
    setFormHours({
      ...formHours,
      notTotalDay: {
        ...formHours.notTotalDay,
        morning: {
          ...formHours.notTotalDay.morning,
          [e.target.name]: e.target.value,
        },
      },
    });
  };
  const handleChangeFormHoursAfternoon = (e) => {
    setFormHours({
      ...formHours,
      notTotalDay: {
        ...formHours.notTotalDay,
        afternoon: {
          ...formHours.notTotalDay.afternoon,
          [e.target.name]: e.target.value,
        },
      },
    });
  };

  //seccion obra social y dias
  const handleDeletePrepaid = (prepaidHealth) => {
    setForm({
      ...form,
      prepaid_healths: form.prepaid_healths.filter((c) => c !== prepaidHealth),
    });
  };

  const handleDeleteDay = (day) => {
    setForm({
      ...form,
      days: form.days.filter((c) => c !== day),
    });
  };

  const handleChangeList = (e) => {
    let search = form[e.target.name].find(
      (element) => element === e.target.value
    );
    if (!search && e.target.value !== "") {
      setForm({
        ...form,
        [e.target.name]: [...form[e.target.name], e.target.value],
      });
      setErrors(
        validateForm({
          ...form,
          [e.target.name]: [...form[e.target.name], e.target.value],
        })
      );
    }
  };

  //MENSAJE CONFIRMACION
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Box>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            w="200px"
            src="https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
            alt=""
          />
          <Input type="file" w="50%" />
        </Box>
        <Box m="1rem" w={{}}>
          <form>
            <FormControl>
              <FormLabel m="1rem" htmlFor="name">
                Nombre completo
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                value={form.name}
                name="name"
                placeholder="Escribe nombre completo"
              />
              {errors.name && (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.document}>
              <FormLabel m="1rem" htmlFor="document">
                Cédula de identificación
              </FormLabel>
              <InputGroup>
                <InputLeftAddon children="DNI" />
                <Input
                  value={form.document}
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="document"
                  placeholder="Nro de documento"
                />
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel m="1rem" htmlFor="medic_id">
                Matrícula
              </FormLabel>
              <Input
                value={form.medic_id}
                onChange={(e) => handleChange(e)}
                name="medic_id"
                placeholder="Escribe nro de matrícula"
              />
              {errors.medic_id && (
                <FormErrorMessage>{errors.medic_id}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.phone}>
              <FormLabel m="1rem" htmlFor="phone">
                Tel/Cel
              </FormLabel>

              <Input
                value={form.phone}
                onChange={(e) => handleChange(e)}
                type="tel"
                name="phone"
                placeholder="Nro de telefono"
              />
            </FormControl>
            <FormControl>
              <FormLabel m="1rem" htmlFor="email">
                Email
              </FormLabel>
              <Input
                value={form.email}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Dirección de email"
                name="email"
              />
              {errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.birthday}>
              <FormLabel m="1rem" htmlFor="birthday">
                Fecha de nacimiento
              </FormLabel>
              <Input
                value={form.birthday}
                onChange={(e) => handleChange(e)}
                type="date"
                max={styleDate(date)}
                name="birthday"
              />
            </FormControl>
            <FormControl>
              <FormLabel m="1rem" htmlFor="general_area">
                Área general
              </FormLabel>
              <Select
                value={form.general_area}
                onChange={(e) => handleChange(e)}
                name="general_area"
              >
                <option>Seleccionar una opción</option>
                <option value="Deportología">Deportología</option>
                <option value="Fisioterapia y kinesiología">
                  Kinesiología y Fisioterapia
                </option>
                <option value="Osteopatía">Osteopatía</option>
                <option value="Quiropraxia">Quiropraxia</option>
                <option value="Reumatología">Reumatología</option>
                <option value="Terapia de dolor">Terapia de Dolor</option>
                <option value="Traumatología">Traumatología</option>
              </Select>
              {errors.general_area && (
                <FormErrorMessage>{errors.general_area}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              {form.general_area && (
                <FormLabel m="1rem" htmlFor="specialty">
                  Especialidad
                </FormLabel>
              )}
              {/*select segun el area general seleccionada*/}
              {form.general_area === "Deportología" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Esguinces">Esguinces</option>
                  <option value="Fracturas">Fracturas</option>
                  <option value="Hernias">Hernias</option>
                  <option value="Ligamentos">Ligamentos</option>
                </Select>
              )}
              {form.general_area === "Fisioterapia y kinesiología" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Columna">Columna</option>
                  <option value="Lumbalgia">Lumbalgia</option>
                  <option value="Miembro Superior">Miembro Superior</option>
                  <option value="Neuralgia">Neuralgia</option>
                  <option value="Respiratoria">Respiratoria</option>
                </Select>
              )}
              {form.general_area === "Osteopatía" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Miembro Inferior">Miembro Inferior</option>
                  <option value="Miembro Superior">Miembro Superior</option>
                </Select>
              )}
              {form.general_area === "Quiropraxia" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Cadera">Cadera</option>
                  <option value="Columna">Columna</option>
                  <option value="Hombro">Hombro</option>
                  <option value="Cervicalgias">Cervicalgias</option>
                  <option value="Dorsalgias">Dorsalgias</option>
                </Select>
              )}
              {form.general_area === "Reumatología" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Artitis">Artitis</option>
                  <option value="Artrosis">Artrosis</option>
                  <option value="Reumatismo">Reumatismo</option>
                  <option value="Dorsalgias">Dorsalgias</option>
                  <option value="Hombro">Hombro</option>
                </Select>
              )}
              {form.general_area === "Terapia de dolor" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Columna">Columna</option>
                  <option value="Mano">Mano</option>
                  <option value="Pie">Pie</option>
                </Select>
              )}
              {form.general_area === "Traumatología" && (
                <Select
                  value={form.specialty}
                  onChange={(e) => handleChange(e)}
                  name="specialty"
                >
                  <option>Seleccionar una opción</option>
                  <option value="Rodilla">Rodilla</option>
                  <option value="Cadera">Cadera</option>
                  <option value="Pie">Pie</option>
                  <option value="Pediatría">Pediatría</option>
                  <option value="Hombro">Hombro</option>
                </Select>
              )}
            </FormControl>

            <FormControl>
              <FormLabel m="1rem" htmlFor="prepaid_healths">
                Prestaciones asociadas
              </FormLabel>
              <Select
                value={form.prepaid_healths}
                onChange={(e) => handleChangeList(e)}
                name="prepaid_healths"
              >
                <option>Seleccionar una opción</option>
                <option value="Particular">Particular</option>
                {prepaidHealth &&
                  prepaidHealth.map((e) => (
                    <option value={e.name}>{e.name}</option>
                  ))}
              </Select>
            </FormControl>
            {form.prepaid_healths.length
              ? form.prepaid_healths.map((e) => (
                  <List>
                    <ListItem key={e}>
                      {e}
                      <Button onClick={() => handleDeletePrepaid(e)}>X</Button>
                    </ListItem>
                  </List>
                ))
              : []}
            <FormControl>
              <Heading textAlign="center" m="1rem" as="h6" size="lg">
                Días y horarios de atención
              </Heading>
              <FormLabel m="1rem" htmlFor="days">
                Días de atención
              </FormLabel>
              <Select
                value={form.work_days}
                name="work_days"
                onChange={(e) => handleChangeList(e)}
              >
                <option>Seleccionar una opción</option>
                {days &&
                  days.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.day}
                    </option>
                  ))}
              </Select>
              {form.work_days.length
                ? form.work_days.map((e) => (
                    <List>
                      <ListItem key={e}>
                        {e}
                        <Button onClick={() => handleDeleteDay(e)}>X</Button>
                      </ListItem>
                    </List>
                  ))
                : []}
              <FormLabel m="1rem" htmlFor="hours">
                Rango horario
              </FormLabel>
              <RadioGroup
                name="prueba"
                onChange={(value) => handleChangeFormHours(value)}
              >
                <Stack direction="row">
                  <Radio name="totalDay" value="totalDay">
                    Horario Corrido
                  </Radio>
                  <Radio name="notTotalDay" value="notTotalDay">
                    Horario cortado
                  </Radio>
                </Stack>
              </RadioGroup>
              {formHours.totalDay ? (
                <FormControl>
                  <FormLabel m="1rem" htmlFor="start">
                    Inicio
                  </FormLabel>
                  <Select
                    name="start"
                    onChange={(e) => handleChangeFormHoursTotalDay(e)}
                  >
                    <option>Seleccionar horario</option>
                    {hoursWorking &&
                      hoursWorking.map((h) => (
                        <option key={h.id} value={h.id}>
                          {h.hour}
                        </option>
                      ))}
                  </Select>
                  <FormLabel m="1rem" htmlFor="end">
                    Fin
                  </FormLabel>
                  <Select
                    name="end"
                    onChange={(e) => handleChangeFormHoursTotalDay(e)}
                  >
                    <option>Seleccionar horario</option>
                    {hoursWorking &&
                      hoursWorking
                        .filter((h) => h.id > formHours.totalDay.start)
                        .map((h) => (
                          <option value={h.id} key={h.id}>
                            {h.hour}
                          </option>
                        ))}
                  </Select>
                </FormControl>
              ) : (
                false
              )}
              {formHours.notTotalDay ? (
                <FormControl>
                  <FormLabel m="1rem" htmlFor="">
                    Rango horario 1
                  </FormLabel>
                  <FormLabel m="1rem" htmlFor="start">
                    Inicio
                  </FormLabel>
                  <Select
                    name="start"
                    onChange={(e) => handleChangeFormHoursMorning(e)}
                  >
                    <option>Seleccionar horario</option>
                    {hoursWorking &&
                      hoursWorking.map((h) => (
                        <option value={h.id} key={h.id}>
                          {h.hour}
                        </option>
                      ))}
                  </Select>
                  <FormLabel m="1rem" htmlFor="end">
                    Fin
                  </FormLabel>
                  <Select
                    name="end"
                    onChange={(e) => handleChangeFormHoursMorning(e)}
                  >
                    <option>Seleccionar horario</option>
                    {hoursWorking &&
                      hoursWorking
                        .filter(
                          (h) => h.id > formHours.notTotalDay.morning.start
                        )
                        .map((h) => (
                          <option value={h.id} key={h.id}>
                            {h.hour}
                          </option>
                        ))}
                  </Select>
                  <FormLabel m="1rem" htmlFor="hours">
                    Rango horario 2
                  </FormLabel>
                  <FormLabel m="1rem" htmlFor="start">
                    Inicio
                  </FormLabel>
                  <Select
                    name="start"
                    onChange={(e) => handleChangeFormHoursAfternoon(e)}
                  >
                    <option>Seleccionar horario</option>
                    {hoursWorking &&
                      hoursWorking
                        .filter((h) => h.id > formHours.notTotalDay.morning.end)
                        .map((h) => (
                          <option value={h.id} key={h.id}>
                            {h.hour}
                          </option>
                        ))}
                  </Select>
                  <FormLabel m="1rem" htmlFor="end">
                    Fin
                  </FormLabel>
                  <Select
                    name="end"
                    onChange={(e) => handleChangeFormHoursAfternoon(e)}
                  >
                    <option>Seleccionar horario</option>
                    {hoursWorking &&
                      hoursWorking
                        .filter(
                          (h) => h.id > formHours.notTotalDay.afternoon.start
                        )
                        .map((h) => (
                          <option value={h.id} key={h.id}>
                            {h.hour}
                          </option>
                        ))}
                  </Select>
                </FormControl>
              ) : (
                false
              )}
            </FormControl>

            <Button
              mt="1rem"
              onClick={(e) => handleSubmit(e)}
              type="submit"
              colorScheme="teal"
              variant="solid"
            >
              Crear doctor
            </Button>
          </form>
        </Box>

        {
          (msgConfirm.status = "200" && (
            <Modal
              isCentered
              isOpen={isOpen}
              onClose={onClose}
              colorScheme="teal"
            >
              {overlay}
              <ModalContent bgColor="green.50">
                <ModalHeader color="teal.600">Registro Existoso!</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text color="teal.600">
                    Los datos fueron cargados exitosamente!
                  </Text>
                </ModalBody>
                <ModalFooter>
                  <Spacer />
                </ModalFooter>
              </ModalContent>
            </Modal>
          ))
        }
      </Box>
    </>
  );
}

export default FormNewDoctor;
