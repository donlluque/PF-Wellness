import {
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Alert,
  AlertIcon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useState, useRef } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanConfirm,
  cleanError,
  getByUserName,
  logIn,
} from "../redux/actions";

function FormLogin({ onCloseVentana }) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const msgError = useSelector((state) => state.msgError);
  const msgConfirm = useSelector((state) => state.msgConfirm);
  console.log("confirm", msgConfirm);

  //CONFIRM MSG
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getByUserName(form.user_name));
    onOpen();
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
        {msgError.status && (
          <Alert status="error">
            <AlertIcon />
            {msgError.statusText}
          </Alert>
        )}
        <Button colorScheme="teal" onClick={(e) => handleSubmit(e)}>
          Ingresar
        </Button>
        <Button
          colorScheme="teal"
          variant="outline"
          onClick={() => {
            dispatch(cleanError());
            onCloseVentana();
          }}
        >
          Cancelar
        </Button>
      </Stack>
      {msgConfirm.user_name && (
        <AlertDialog
          motionPreset="slideInBottom"
          leastDestructiveRef={cancelRef}
          onClose={onClose}
          isOpen={isOpen}
          isCentered
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                INGRESO EXITOSO!
              </AlertDialogHeader>

              <AlertDialogFooter>
                <Button
                  colorScheme="teal"
                  onClick={() => {
                    onClose();
                    onCloseVentana();
                    dispatch(cleanConfirm());
                    dispatch(cleanError());
                  }}
                  ml={3}
                >
                  Close
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      )}
    </>
  );
}

export default FormLogin;
