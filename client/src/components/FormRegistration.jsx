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
  FormErrorMessage,
  ListItem,
  List,
} from "@chakra-ui/react";
import { useState } from "react";
import { postPatient } from "../redux/actions";
import { useDispatch } from "react-redux";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { validateForm } from "../hooks/validateForm";

function FormRegistration({ onClose }) {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
   
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleBlur = (e) => {
    setErrors(validateForm({ ...form, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
    dispatch(postPatient(form));
    onClose();
    setForm({});
  };

  return (
    <>
      <Stack>
        <form>
          <FormControl isRequired isInvalid={errors.name}>
            <Box mt="1rem">
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                name="name"
                placeholder="Escribe nombre completo"
              />
              {errors.name && (
                <FormErrorMessage>{errors.name}</FormErrorMessage>
              )}
            </Box>
          </FormControl>
          <FormControl isRequired isInvalid={errors.last_name}>
            <Box mt="1rem">
              <FormLabel htmlFor="last_name">Apellido</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="last_name"
                placeholder="Escribe apellido"
              />
              {errors.last_name && (
                <FormErrorMessage>{errors.last_name}</FormErrorMessage>
              )}
            </Box>
          </FormControl>
          <FormControl isRequired isInvalid={errors.email}>
            <Box mt="1rem">
              <FormLabel htmlFor="email">Email</FormLabel>
              <Input
                onChange={(e) => handleChange(e)}
                name="email"
                type="email"
                placeholder="Dirección de email"
              />
              {errors.email && (
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              )}
            </Box>
          </FormControl>
          <FormControl isRequired>
            <Box mt="1rem">
              <FormLabel htmlFor="user_name">Usuario</FormLabel>
              <Input
                type="username"
                name="user_name"
                placeholder="Crear nombre de usuario"
                onChange={(e) => handleChange(e)}
              />
            </Box>
          </FormControl>
          <FormControl
            isRequired
            isInvalid={
              errors.password ||
              errors.passwordMay ||
              errors.passwordMin ||
              errors.passwordLetters
            }
          >
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
              <List fontSize="0.7rem" m="0.5rem">
                <ListItem color={errors.passwordLetters ? "red" : "green"}>
                  - Se requieren al menos 6 caracteres
                </ListItem>
                <ListItem color={errors.passwordMin ? "red" : "green"}>
                  - Se requiere al menos una letra en minuscula
                </ListItem>
                <ListItem color={errors.passwordMay ? "red" : "green"}>
                  - Se requiere al menos una letra en mayuscula
                </ListItem>
              </List>
            </Box>
          </FormControl>
          <Button
            colorScheme="teal"
            isDisabled={
              errors.name || errors.last_name || errors.email || errors.password
            }
            onClick={handleSubmit}
          >
            Crear cuenta
          </Button>
          <Button colorScheme="teal" variant="outline" mr={3} onClick={onClose}>
            Cancelar
          </Button>
        </form>
      </Stack>
    </>
  );
}

export default FormRegistration;
