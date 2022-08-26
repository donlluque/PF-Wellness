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
} from "@chakra-ui/react";

import { putPatient } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOnePatient } from "../redux/actions";
import { validateForm } from "../hooks/validateForm.js";
import UploadImages from "./UploadImages";
import { intlFormat } from "date-fns/esm";

function FormUserProfile() {
  const { id } = useParams();

  const [putActive, setPutActive] = useState(false);
  const dispatch = useDispatch();

  console.log(id);
  const { patientDetail, msgConfirm } = useSelector((state) => state);
  const { name, last_name, email, picture } = patientDetail;
  const [errors, setErrors] = useState({});
  const date = new Date().toLocaleDateString().split("/").reverse();
  const [aux, setAux] = useState({ name, last_name, email, picture });
  const user = useSelector((state) => state.user);
  console.log("user", user);

  const [form, setForm] = useState({
    id,
    name: "",
    last_name: "",
    email: "",
    birthday: "",
    document: "",
    phone: "",
    nationality: "",
    direction: "",
    prepaid_health: "",
  });

  console.log("form", form);

 // var perfil = JSON.parse(window.localStorage.getItem("user"));
 // console.log("perfil", perfil);
  console.log(form, "soy user ");
  const styleDate = (date) => {
    if (date[1].length === 1) {
      date[1] = "0" + date[1];
    }
    return date.join("-");
  };

  console.log("renderizado", name, last_name, email, picture);
  useEffect(() => {
    // if (Object.keys(user).length) {
    //   setForm({
    //     ...form,
    //     name: user.name,
    //     last_name: user.last_name,
    //     email: user.email,
    //     user_name: user.nickname,
    //     birthday: user.birthday,
    //     direction: user.direction,
    //     document: user.document,
    //     nationality: user.nationality,
    //     phone: user.phone,
    //     picture: user.picture,
    //     prepaid_health: user.prepaid_health,
    //     id: user.id,
    //   });
    //   // const este = localStorage.setItem("prueba", JSON.stringify(user));
    // } else {
    //   setForm({ ...form, name, last_name, email, id });
    // }
    dispatch(getOnePatient(id));
    // setAux(!aux);
  }, [dispatch]);

  // useEffect(() => {
  //   return setAux(!aux);
  // }, dispatch);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    // if (errors) {
    //   return alert("Completa los campos");
    // } else {
    // localStorage.removeItem("user");
    window.localStorage.setItem("user", JSON.stringify(form));
    dispatch(putPatient(form));
    setOverlay(<OverlayOne />);
    onOpen();
    setPutActive(false);
    // }
  };

  const handlePutActive = () => {
    setPutActive(true);
  };

  const handleBlur = (e) => {
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  //MENSAJE
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
      <Box display={{ md: "flex" }} justifyContent="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* <Image
            w="200px"
            src="https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
            alt=""
          /> */}

          {!putActive && (
            <Button
              m="2rem"
              onClick={handlePutActive}
              colorScheme="teal"
              variant="solid"
            >
              Modificar datos
            </Button>
          )}
        </Box>
        <Box m="1rem" w="50rem">
          <FormControl>
            <FormControl isDisabled={!putActive}>
              <UploadImages />
            </FormControl>
            <FormControl isDisabled={!putActive}>
              <FormLabel m="1rem" htmlFor="name">
                Nombre
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                name="name"
                placeholder={
                  !form.name ? "Escribe nombre completo" : form.name
                }
              />
              {/* {errors.name && (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              )} */}
            </FormControl>
            <FormControl isDisabled={!putActive}>
              <FormLabel m="1rem" htmlFor="last_name">
                Apellido
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="last_name"
                placeholder={
                  !form.last_name
                    ? "Escribe nombre completo"
                    : form.last_name
                }
              />
            </FormControl>
            <FormControl isDisabled={!putActive}>
              <FormLabel m="1rem" htmlFor="email">
                Email
              </FormLabel>
              <Input
                disabled
                value={form.email}
                onChange={(e) => handleChange(e)}
                type="email"
                name="email"
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.birthday}>
              <FormLabel m="1rem" htmlFor="birthday">
                Fecha de nacimiento
              </FormLabel>
              <Input
                value={form.birthday}
                onChange={(e) => handleChange(e)}
                type="date"
                max={styleDate(date)}
                name="birthday"
                // placeholder={
                //   !form.birthday ? "Escribe nombre completo" : form.birthday
                // }
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.document}>
              <FormLabel m="1rem" htmlFor="document">
                Cédula de identificación
              </FormLabel>
              <InputGroup>
                <InputLeftAddon children="DNI" />
                <Input
                  // value={form.document}
                  onChange={(e) => handleChange(e)}
                  type="number"
                  name="document"
                  placeholder={
                    !form.document ? "Nro de documento" : form.document
                  }
                />
              </InputGroup>
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.phone}>
              <FormLabel m="1rem" htmlFor="phone">
                Tel/Cel
              </FormLabel>

              <Input
                // value={form.phone}
                onChange={(e) => handleChange(e)}
                type="tel"
                name="phone"
                placeholder={!form.phone ? "Nro de telefono" : form.phone}
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.nationality}>
              <FormLabel m="1rem" htmlFor="nationality">
                Nacionalidad
              </FormLabel>
              <Input
                // value={form.nationality}
                onChange={(e) => handleChange(e)}
                name="nationality"
                placeholder={
                  !form.nationality ? "Nacionalidad" : form.nationality
                }
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.direction}>
              <FormLabel m="1rem" htmlFor="direction">
                Dirección
              </FormLabel>

              <Input
                // value={form.direction}
                onChange={(e) => handleChange(e)}
                name="direction"
                placeholder={
                  !form.direction ? "Calle, N°, depto" : form.direction
                }
              />
            </FormControl>
            <FormControl isDisabled={!putActive}>
              <FormLabel m="1rem" htmlFor="prepaid">
                Obra social
              </FormLabel>
              <Select
                // value={form.prepaid_health}
                onChange={(e) => handleChange(e)}
                name="prepaid_health"
              >
                <option>Seleccionar una opción</option>
                <option value="false">Ninguna</option>
                <option value="Galeno">Galeno</option>
                <option value="Medicus">Medicus</option>
                <option value="Medife">Medife</option>
                <option value="Osde">Osde</option>
                <option value="Parque Salud">Parque Salud</option>
                <option value="Swiss Medical">Swiss Medical</option>
              </Select>
            </FormControl>

            <Button
              mt="1rem"
              onClick={(e) => handleSubmit(e)}
              type="submit"
              colorScheme="teal"
              variant="solid"
            >
              Guardar
            </Button>
          </FormControl>
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
                <ModalHeader color="teal.600">form actualizado</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  <Text color="teal.600">
                    Tus datos fueron modificados exitosamente!
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

export default FormUserProfile;
