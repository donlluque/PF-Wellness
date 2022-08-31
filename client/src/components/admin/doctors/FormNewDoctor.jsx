import {
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
  Icon,
} from "@chakra-ui/react";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  getAllAreas,
  getDays,
  getHours,
  getPrepaidHealth,
  postDoctors,
} from "../../../redux/actions.js";
import { validateForm } from "../../../hooks/validateForm.js";
import UploadImageDoctor from "../../UploadImageDoctor";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation } from "react-router-dom";

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
  const [putActive, setPutActive] = useState(false);
  const { pathname } = useLocation();
  const [form, setForm] = useState(initialForm);
  const [formHours, setFormHours] = useState({});
  const dispatch = useDispatch();
  const { msgConfirm, prepaidHealth, hoursWorking, days, areas } = useSelector(
    (state) => state
  );
  console.log(pathname);

  const [errors, setErrors] = useState({});
  const date = new Date().toLocaleDateString().split("/").reverse();

  useEffect(() => {
    dispatch(getPrepaidHealth());
    dispatch(getHours());
    dispatch(getDays());
    dispatch(getAllAreas());
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
    //form.prepaid_healths.push("Wellness");
    form.hours_json = formHours;
    //setErrors(validateForm(form));
    console.log(form);
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
    if (e === "totalDay") {
      setFormHours({ [e]: { start: "", end: "" } });
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
      work_days: form.work_days.filter((c) => c !== day),
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
        <UploadImageDoctor />

        <Box display="flex" flexDirection="column" alignItems="center" w="100%">
          <form border="3px solid green">
            <FormControl
              w={{ md: "30rem", xl: "40rem" }}
              isInvalid={errors.name}
            >
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
                Documento
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
              {errors.document && (
                <FormErrorMessage>{errors.document}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.medic_id}>
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
              {errors.phone && (
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={errors.email}>
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
            <FormControl isInvalid={errors.general_area}>
              <FormLabel m="1rem" htmlFor="general_area">
                Área general
              </FormLabel>
              <Select
                value={form.general_area}
                onChange={(e) => handleChange(e)}
                name="general_area"
              >
                <option>Seleccionar una opción</option>
                {areas &&
                  areas.map((e) => (
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  ))}
                {/*<option value="Deportología">Deportología</option>
                <option value="Fisioterapia y kinesiología">
                  Kinesiología y Fisioterapia
                </option>
                <option value="Osteopatía">Osteopatía</option>
                <option value="Quiropraxia">Quiropraxia</option>
                <option value="Reumatología">Reumatología</option>
                <option value="Terapia de dolor">Terapia de Dolor</option>
              <option value="Traumatología">Traumatología</option>*/}
              </Select>
              {errors.general_area && (
                <FormErrorMessage>{errors.general_area}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={errors.specialty}>
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
              {errors.specialty && form.general_area && (
                <FormErrorMessage>{errors.specialty}</FormErrorMessage>
              )}
            </FormControl>

            <FormControl isInvalid={errors.prepaid_healths}>
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
                    <option key={e.id} value={e.name}>
                      {e.name}
                    </option>
                  ))}
              </Select>
              {errors.prepaid_healths && (
                <FormErrorMessage>{errors.prepaid_healths}</FormErrorMessage>
              )}
            </FormControl>
            <List display="inline-flex" flexDirection={"row"} flexWrap="wrap">
              {form.prepaid_healths.length
                ? form.prepaid_healths.map((e) => (
                    <ListItem m="1rem" key={e}>
                      {e}
                      <Button
                        colorScheme={"teal"}
                        variant={"ghost"}
                        cursor="pointer"
                        onClick={() => handleDeletePrepaid(e)}
                      >
                        <Icon as={AiOutlineClose} />
                      </Button>
                    </ListItem>
                  ))
                : []}
            </List>
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
              <List display="inline-flex" flexDirection={"row"} flexWrap="wrap">
                {form.work_days.length
                  ? form.work_days.map((e) => (
                      <ListItem m="1rem" key={e}>
                        {e === "1"
                          ? "Lunes"
                          : e === "2"
                          ? "Martes"
                          : e === "3"
                          ? "Miércoles"
                          : e === "4"
                          ? "Jueves"
                          : "Viernes"}
                        <Button
                          colorScheme={"teal"}
                          variant={"ghost"}
                          onClick={() => handleDeleteDay(e)}
                          cursor="pointer"
                        >
                          <Icon as={AiOutlineClose} />
                        </Button>
                      </ListItem>
                    ))
                  : []}
              </List>
              <Box>
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
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent={"space-around"}
                    >
                      <Box display="flex" flexDirection="column">
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
                      </Box>
                      <Box display="flex" flexDirection="column">
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
                      </Box>
                    </Box>
                  </FormControl>
                ) : (
                  false
                )}
                {formHours.notTotalDay ? (
                  <FormControl>
                    <FormLabel m="1rem" htmlFor="">
                      Rango horario 1
                    </FormLabel>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent={"space-around"}
                    >
                      <Box display="flex" flexDirection="column">
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
                      </Box>
                      <Box display="flex" flexDirection="column">
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
                                (h) =>
                                  h.id > formHours.notTotalDay.morning.start
                              )
                              .map((h) => (
                                <option value={h.id} key={h.id}>
                                  {h.hour}
                                </option>
                              ))}
                        </Select>
                      </Box>
                    </Box>
                    <FormLabel m="1rem" htmlFor="hours">
                      Rango horario 2
                    </FormLabel>
                    <Box
                      display="flex"
                      flexDirection="row"
                      justifyContent={"space-around"}
                    >
                      <Box display="flex" flexDirection="column">
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
                              .filter(
                                (h) => h.id > formHours.notTotalDay.morning.end
                              )
                              .map((h) => (
                                <option value={h.id} key={h.id}>
                                  {h.hour}
                                </option>
                              ))}
                        </Select>
                      </Box>
                      <Box display="flex" flexDirection="column">
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
                                (h) =>
                                  h.id > formHours.notTotalDay.afternoon.start
                              )
                              .map((h) => (
                                <option value={h.id} key={h.id}>
                                  {h.hour}
                                </option>
                              ))}
                        </Select>
                      </Box>
                    </Box>
                  </FormControl>
                ) : (
                  false
                )}
              </Box>
            </FormControl>
          </form>

          <Button
            mt="1rem"
            onClick={(e) => handleSubmit(e)}
            type="submit"
            colorScheme="teal"
            variant="solid"
          >
            Crear doctor
          </Button>
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
                  {pathname === "/admin" ? (
                    <Text color="teal.600">
                      Los datos fueron cargados exitosamente!
                    </Text>
                  ) : (
                    <Text color="teal.600">
                      Los datos fueron modificados exitosamente!
                    </Text>
                  )}
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
