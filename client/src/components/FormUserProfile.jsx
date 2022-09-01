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

function FormUserProfile() {
  const { id } = useParams();
  const [image, setImage] = useState("");
  const [putActive, setPutActive] = useState(false);
  const dispatch = useDispatch();
  const { patientDetail, msgConfirm } = useSelector((state) => state);
  const [errors, setErrors] = useState({ flag: false });
  const date = new Date().toLocaleDateString().split("/").reverse();
  // const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  localStorage.setItem("user", JSON.stringify(patientDetail));
  var perfil = JSON.parse(localStorage.getItem("user"));

  console.log(errors, "errors");

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
    picture: "",
  });

  console.log(form, "form");

  const styleDate = (date) => {
    if (date[1].length === 1) {
      date[1] = "0" + date[1];
    }
    return date.join("-");
  };

  const UploadI = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Wellness");
    setLoading(true);
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dtbkiy2fk/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
    setLoading(false);
    setForm({ ...form, [e.target.name]: file.secure_url });
  };

  useEffect(() => {
    dispatch(getOnePatient(id));
    // setAux(!aux);
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(form));
    dispatch(putPatient(form));
    setOverlay(<OverlayOne />);
    onOpen();
    setPutActive(false);
  };

  const handlePutActive = () => {
    if (perfil.prepaid_healths.length > 0) {
      setForm({
        ...form,
        email: perfil.email,
        name: perfil.name,
        last_name: perfil.last_name,
        birthday: perfil.birthday,
        document: perfil.document,
        phone: perfil.phone,
        nationality: perfil.nationality,
        direction: perfil.direction,
        picture: perfil.picture,
        prepaid_health: perfil.prepaid_healths[0].name,
      });
    } else {
      setForm({
        ...form,
        email: perfil.email,
        name: perfil.name,
        last_name: perfil.last_name,
        birthday: perfil.birthday,
        document: perfil.document,
        phone: perfil.phone,
        nationality: perfil.nationality,
        direction: perfil.direction,
        picture: perfil.picture,
      });
    }

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
              <Input
                name="picture"
                type="file"
                placeholder={
                  !perfil.picture ? "Escribe nombre completo" : perfil.picture
                }
                onChange={UploadI}
              />
              {loading ? (
                <h3>Cargando imagen...</h3>
              ) : (
                <Image
                  borderRadius="full"
                  boxSize="150px"
                  src={form.picture}
                  fallbackSrc="https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
                />
              )}
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.name}>
              <FormLabel m="1rem" htmlFor="name">
                Nombre
              </FormLabel>
              <Input
                value={form.name}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                name="name"
                placeholder={
                  !perfil.name ? "Escribe nombre completo" : perfil.name
                }
              />
              {errors.name && (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.last_name}>
              <FormLabel m="1rem" htmlFor="last_name">
                Apellido
              </FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="last_name"
                value={form.last_name}
                placeholder={
                  !perfil.last_name ? "Escribe apellidos" : perfil.last_name
                }
              />
              {errors.last_name && (
                <FormErrorMessage>{errors.last_name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isDisabled={!putActive}>
              <FormLabel m="1rem" htmlFor="email">
                Email
              </FormLabel>
              <Input
                disabled
                value={perfil.email}
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
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.document}>
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
                  placeholder={
                    !perfil.document ? "Nro de documento" : perfil.document
                  }
                />
              </InputGroup>

              {errors.document && (
                <FormErrorMessage>{errors.document}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.phone}>
              <FormLabel m="1rem" htmlFor="phone">
                Tel/Cel
              </FormLabel>

              <Input
                value={form.phone}
                onChange={(e) => handleChange(e)}
                type="tel"
                name="phone"
                placeholder={!perfil.phone ? "Nro de telefono" : perfil.phone}
              />
              {errors.phone && (
                <FormErrorMessage>{errors.phone}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.nationality}>
              <FormLabel m="1rem" htmlFor="nationality">
                Nacionalidad
              </FormLabel>
              <Input
                value={form.nationality}
                onChange={(e) => handleChange(e)}
                name="nationality"
                placeholder={
                  !perfil.nationality ? "Nacionalidad" : perfil.nationality
                }
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.direction}>
              <FormLabel m="1rem" htmlFor="direction">
                Dirección
              </FormLabel>

              <Input
                value={form.direction}
                onChange={(e) => handleChange(e)}
                name="direction"
                placeholder={
                  !perfil.direction ? "Calle, N°, depto" : perfil.direction
                }
              />
            </FormControl>
            <FormControl
              isDisabled={!putActive}
              isInvalid={errors.prepaid_health}
            >
              <FormLabel m="1rem" htmlFor="prepaid">
                Obra social
              </FormLabel>
              <Select
                value={form.prepaid_health}
                onChange={(e) => handleChange(e)}
                name="prepaid_health"
              >
                <option value="">Seleccionar una opción</option>
                <option value="Particular">Particular</option>
                <option value="Galeno">Galeno</option>
                <option value="Medicus">Medicus</option>
                <option value="Medife">Medife</option>
                <option value="Osde">Osde</option>
                <option value="Parque Salud">Parque Salud</option>
                <option value="Swiss Medical">Swiss Medical</option>
              </Select>

              {errors.prepaid_health && (
                <FormErrorMessage>{errors.prepaid_health}</FormErrorMessage>
              )}
            </FormControl>

            <Button
              mt="1rem"
              onClick={(e) => handleSubmit(e)}
              type="submit"
              colorScheme="teal"
              variant="solid"
              disabled={Object.keys(errors).length}
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
                <ModalHeader color="teal.600">Perfil actualizado</ModalHeader>
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
