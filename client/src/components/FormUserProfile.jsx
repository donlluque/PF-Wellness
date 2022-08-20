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
} from "@chakra-ui/react";
import { useState } from "react";
import { putPatient } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOnePatient } from "../redux/actions";
import { validateForm } from "../hooks/validateForm.js";

function FormUserProfile() {
  const [form, setForm] = useState({});
  const [putActive, setPutActive] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const dataPatient = useSelector((state) => state.patientDetail);
  const [errors, setErrors] = useState({});
  const date = new Date().toLocaleDateString().split("/").reverse();

  const styleDate = (date) => {
    if (date[1].length === 1) {
      date[1] = "0" + date[1];
    }
    return date.join("-");
  };

  useEffect(() => {
    dispatch(getOnePatient(id));
    setForm({ ...form, dataPatient });
  }, [dispatch]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    dispatch(putPatient(form));
    setPutActive(false);
  };

  const handlePutActive = () => {
    setPutActive(true);
  };

  const handleBlur = (e) => {
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <Box display={{ md: "flex" }} justifyContent="center">
        <Box display="flex" flexDirection="column" alignItems="center">
          <Image
            w="200px"
            src="https://thumbs.dreamstime.com/b/icono-de-usuario-predeterminado-vectores-imagen-perfil-avatar-predeterminada-vectorial-medios-sociales-retrato-182347582.jpg"
            alt=""
          />
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
          <form>
            <FormControl isDisabled={!putActive} isInvalid={errors.name}>
              <FormLabel m="1rem" htmlFor="name">
                Nombre
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
            <FormControl isDisabled={!putActive} isInvalid={errors.last_name}>
              <FormLabel m="1rem" htmlFor="last_name">
                Apellido
              </FormLabel>
              <Input
                value={form.last_name}
                onChange={(e) => handleChange(e)}
                name="last_name"
                placeholder="Escribe apellido"
              />
              {errors.last_name && (
                <FormErrorMessage>{errors.last_name}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.email}>
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
                  placeholder="Nro de documento"
                />
              </InputGroup>
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
                placeholder="Nro de telefono"
              />
            </FormControl>
            <FormControl isDisabled={!putActive} isInvalid={errors.nationality}>
              <FormLabel m="1rem" htmlFor="nacionality">
                Nacionalidad
              </FormLabel>
              <Input
                value={form.nationality}
                onChange={(e) => handleChange(e)}
                name="nacionality"
                placeholder="Nacionalidad"
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
                placeholder="Calle, N°, depto"
              />
            </FormControl>
            <FormControl isDisabled={!putActive}>
              <FormLabel m="1rem" htmlFor="prepaid">
                Obra social
              </FormLabel>
              <Select
                value={form.prepaid}
                onChange={(e) => handleChange(e)}
                name="prepaid"
              >
                <option>Seleccionar una opción</option>
                <option value="False">Ninguna</option>
                <option value="Galeno">Galeno</option>
                <option value="Medicus">Medicus</option>
                <option value="Medife">Medife</option>
                <option value="Osde">Osde</option>
                <option value="Parque Salud">Parque Salud</option>
                <option value="Swiss Medical">Swiss Medical</option>
              </Select>
            </FormControl>
            <Button
              isDisabled={errors.name || errors.last_name || errors.email}
              mt="1rem"
              onClick={(e) => handleSubmit(e)}
              type="submit"
              colorScheme="teal"
              variant="solid"
            >
              Guardar
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default FormUserProfile;
