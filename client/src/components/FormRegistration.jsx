import {
  Button,
  FormLabel,
  Input,
  InputGroup,
  FormControl,
  InputRightElement,
  Box,
  Icon,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { postPatient } from "../redux/actions";
import { useDispatch } from "react-redux";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

//FALTA HACER VALIDACIONES
const validateForm = (form) => {
  let errors = {};
  //let regexPassword = { /^(?=.*[0-9])(?=.*[az])(?=.*[AZ])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}$/};
  let regexPassword = {
    min: /(?=.*[az])/,
    may: /(?=.*[AZ])/,
    blanks: /(?=\\S+$)/,
    letters: /.{6, 10}$/,
  };
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/; //letras y numeros, puntos, guiones,arroba
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚú\s]+$/; //acepta letras y espacios, caracteres ajenos al ingles como la ñ

  if (!form.name.trim()) {
    errors.name = "El nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El nombre solo acepta letras y espacios en blanco";
  }
  if (!form.last_name) {
    errors.last_name = "El apellido es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.last_name = "El apellido solo acepta letras y espacios en blanco";
  }

  if (!form.email) {
    errors.email = "El email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email =
      "El email solo acepta letras, números y caracteres especiales";
  }

  if (!form.password) {
    errors.password = "La contraseña es requerida";
  } else if (!regexPassword.min.test(form.password)) {
    errors.passwordMin = "Se requiere al menos una letra minuscula";
  } else if (!regexPassword.may.test(form.password)) {
    errors.passwordMay = "Se requiere al menos una letra mayuscula";
  }

  return errors;
};

function FormRegistration({ onClose }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setErrors(validateForm(form));
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    dispatch(postPatient(form));
    setForm({});
  };

  return (
    <>
      <Stack>
        <FormControl isRequired>
          <Box mt="1rem">
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="name"
              placeholder="Escribe nombre completo"
            />
          </Box>
          <Box mt="1rem">
            <FormLabel htmlFor="last_name">Apellido</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              name="last_name"
              placeholder="Escribe apellido"
            />
          </Box>
          <Box mt="1rem">
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              onChange={(e) => handleChange(e)}
              ame="email"
              type="email"
              placeholder="Dirección de email"
            />
          </Box>
          <Box mt="1rem">
            <FormLabel htmlFor="username">Usuario</FormLabel>
            <Input
              type="username"
              name="username"
              placeholder="Crear nombre de usuario"
              onChange={(e) => handleChange(e)}
            />
          </Box>

          <Box mt="1rem" mb="1rem">
            <FormLabel htmlFor="password">Contraseña</FormLabel>
            <InputGroup size="md">
              <Input
                onChange={(e) => handleChange(e)}
                r="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Crear contraseña"
                name="password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? (
                    <Icon as={MdVisibilityOff} />
                  ) : (
                    <Icon as={MdVisibility} />
                  )}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
        </FormControl>
        <Button colorScheme="teal" onClick={handleSubmit}>
          Crear cuenta
        </Button>
        <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
          Cancelar
        </Button>
      </Stack>
    </>
  );
}

export default FormRegistration;
