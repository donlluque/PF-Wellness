import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  Heading,
  Button,
  Stack,
  FormLabel,
  Input,
  Box,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Textarea,
  Select,
  useDisclosure,
  FormControl,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";

function FormUserRegistration() {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const [form, setForm] = useState({});

  return (
    <>
      <Center h="100vh" top={0} bgColor="#fcf7d7" mb={2}>
        <Heading as="h1" size="2xl">
          Crear cuenta
        </Heading>
      </Center>
      <FormControl isRequired>
        <FormLabel htmlFor="first-name">Nombre</FormLabel>
        <Input name="first-name" placeholder="Escribe nombre completo" />
        <FormLabel htmlFor="last-name">Apellido</FormLabel>
        <Input name="last-name" placeholder="Escribe apellido" />
        <FormLabel htmlFor="born-date">Fecha de nacimiento</FormLabel>
        <Input type="date" name="born-name" />
        <FormLabel htmlFor="document">Cédula de identificación</FormLabel>
        <InputGroup>
          <InputLeftAddon children="DNI" />
          <Input type="number" name="document" placeholder="Nro de documento" />
        </InputGroup>
        <FormLabel htmlFor="phone">Tel/Cel</FormLabel>
        <InputGroup>
          <InputLeftAddon children="+54" />
          <Input type="tel" name="phone" placeholder="Nro de telefono" />
        </InputGroup>
        <FormLabel htmlFor="nacionaity">Nacionalidad</FormLabel>
        <Input name="nacionality" />
        <FormLabel htmlFor="address">Dirección</FormLabel>
        <InputGroup>
          <Input type="text" name="address" placeholder="Calle" />
          <Input type="number" name="number-address" placeholder="Nro" />
          <Input name="depto" placeholder="N° casa/depto" />
        </InputGroup>
        <FormLabel htmlFor="prepaid">Obra social</FormLabel>
        <Select name="prepaid">
          <option>Seleccionar una opción</option>
          <option value="Galeno">Galeno</option>
          <option value="Medicus">Medicus</option>
          <option value="Medife">Medife</option>
          <option value="Osde">Osde</option>
          <option value="Parque Salud">Parque Salud</option>
          <option value="Swiss Medical">Swiss Medical</option>
        </Select>

        <FormLabel htmlFor="email">Email</FormLabel>
        <Input name="email" type="email" />
        <FormLabel htmlFor="username">Usuario</FormLabel>
        <Input name="username" type="text" placeholder="Crear usuario" />
        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <InputGroup size="md">
          <Input
            pr="4.5rem"
            type={show ? "text" : "password"}
            placeholder="Crear contraseña"
            name="password"
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </>
  );
}

export default FormUserRegistration;
