import {
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
} from "@chakra-ui/react";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch } from "react-redux";
import { getByUserName, logIn } from "../redux/actions";

function FormLogin({ onClose }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(getByUserName(form.user_name));
    onClose();
    setForm({});
  };

  return (
    <>
      <Stack spacing="24px">
        <Box mt="1rem">
          <FormLabel htmlFor="user_name">Usuario</FormLabel>

          <Input
            onChange={(e) => handleChange(e)}
            type="username"
            name="user_name"
            placeholder="Ingresar nombre de usuario"
          />
        </Box>
        <Box mt="1rem">
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
        <Button colorScheme="teal" onClick={(e) => handleSubmit(e)}>
          Ingresar
        </Button>
        <Button colorScheme="teal" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
      </Stack>
    </>
  );
}

export default FormLogin;
