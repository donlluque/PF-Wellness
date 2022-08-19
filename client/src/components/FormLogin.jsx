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

function FormLogin({ onClose }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <Stack spacing="24px">
        <Box mt="1rem">
          <FormLabel htmlFor="username">Usuario</FormLabel>

          <Input
            type="username"
            name="username"
            placeholder="Ingresar nombre de usuario"
          />
        </Box>
        <Box mt="1rem">
          <FormLabel htmlFor="password">Contraseña</FormLabel>
          <InputGroup size="md">
            <Input
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
        <Button colorScheme="teal">Ingresar</Button>
        <Button colorScheme="teal" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
      </Stack>
    </>
  );
}

export default FormLogin;
