import {
  Box,
  Text,
  Button,
  Alert,
  AlertIcon,
  AlertDescription,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  List,
  ListItem,
  AlertTitle,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllAreas,
  getOnePatient,
  getPrepaidHealth,
  postTurn,
} from "../redux/actions";
import axios from "axios";
import { baseURL } from "../index.js";

function Payments({ onClose, isOpen, onOpen, form, active }) {
  const dispatch = useDispatch();
  const { doctorDetail, patientDetail, prepaidHealth, areas } = useSelector(
    (state) => state
  );
  const [wellnessPrepaid, setWellnessPrepaid] = useState(false);
  const [withoutPrepaid, setWithoutPrepaid] = useState(false);
  const [prepaid, setPrepaid] = useState("");
  const [payActive, setPayActive] = useState(false);
  const [input, setInput] = useState({});

  useEffect(() => {
    dispatch(getOnePatient(form.idPatient));
    dispatch(getPrepaidHealth());
    setPrepaid(handlePrepaid());
    dispatch(getAllAreas());
  }, [active]);

  const handlePrepaid = () => {
    let result;
    if (patientDetail.prepaid_healths?.find((e) => e.name === "Wellness")) {
      //OBRA SOCIAL WELLNESS?
      setWellnessPrepaid(true);
      result = "Wellness";
    } else {
      if (patientDetail.prepaid_healths?.find((e) => e.name === "Particular")) {
        //PACIENTE PARTICULAR ?
        setWithoutPrepaid(true);
        result = "Particular";
      } else {
        if (
          doctorDetail.prepaid_healths?.find((e) => e.name === "Particular")
        ) {
          //MEDICO PARTICULAR?
          setWithoutPrepaid(true);
          result = "Particular";
        } else {
          let prepaidPatient = patientDetail.prepaid_healths
            ? patientDetail.prepaid_healths[0].name
            : false;
          let selectPrepaid = doctorDetail.prepaid_healths?.find(
            (e) => e.name === prepaidPatient
          );

          if (selectPrepaid) {
            result = selectPrepaid.name;
          } else {
            setWithoutPrepaid(true);
            result = "Particular";
          }
        }
      }
    }
    handleChange(result);
    return result;
  };

  const handleSubmitNotPay = () => {
    dispatch(postTurn(form));
    onClose();
  };

  const handleSubmitPay = async (e) => {
    e.preventDefault();
    setPayActive(true);
    try {
      const generarLink = await axios.post(`${baseURL}/pagos`, "ingresar");
      window.location.href = generarLink.data;
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (result) => {
    if (result === "Wellness") {
    } else if (result === "Particular") {
      setInput({ ...form });
    } else if (
      result === "Galeno" ||
      result === "Osde" ||
      result === "Parque Salud" ||
      result === "Medicus" ||
      result === "Swiss Medical"
    ) {
      let percentage = prepaidHealth.find((e) => e.name === result).percentage;
      console.log(percentage, "%");
      setInput({ ...input, percentage });
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader colorScheme="teal">Confirmar turno</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <List spacing={3} m="1rem">
              <ListItem>
                <Text fontWeight="semibold" display="inline">
                  Doctor:
                </Text>{" "}
                {doctorDetail.name}
              </ListItem>
              <ListItem>
                <Text fontWeight="semibold" display="inline">
                  Área:
                </Text>{" "}
                {doctorDetail.general_area}
              </ListItem>
              <ListItem>
                <Text fontWeight="semibold" display="inline">
                  Fecha:
                </Text>{" "}
                {form.date}
              </ListItem>
              <ListItem>
                <Text fontWeight="semibold" display="inline">
                  Hora:
                </Text>{" "}
                {form.idHour}
              </ListItem>

              {prepaid !== "Wellness" && (
                <ListItem>
                  <Text fontWeight="semibold" display="inline">
                    Costo consulta:
                  </Text>{" "}
                  $1000
                </ListItem>
              )}
              {(prepaid !== "Wellness" || prepaid !== "Particular") && (
                <ListItem>
                  <Text fontWeight="semibold" display="inline">
                    Cobertura Obra Social:
                  </Text>{" "}
                </ListItem>
              )}
              {prepaid !== "Wellness" && (
                <ListItem>
                  <Text fontWeight="semibold" display="inline">
                    Monto a pagar: 650
                  </Text>{" "}
                </ListItem>
              )}
              {prepaid !== "Wellness" && (
                <Alert status="info" display={"flex"} flexDirection="column">
                  <Box display={"flex"} flexDirection="row">
                    <AlertIcon />
                    <AlertTitle>Wellness PRO!</AlertTitle>
                  </Box>
                  <Box
                    display={"flex"}
                    flexDirection="column"
                    alignItems={"center"}
                    mt={"1rem"}
                  >
                    <AlertDescription textAlign={"center"}>
                      Suscribite a nuestro programa y obtené una cobertura del
                      100% en nuestros servicios
                    </AlertDescription>
                    <Button mt={"0.5rem"}>Suscribirse</Button>
                  </Box>
                </Alert>
              )}
              {prepaid === "Wellness" && (
                <Alert status="success">
                  <AlertIcon />
                  Consulta bonificada por Wellness. Gracias por ser parte!
                </Alert>
              )}
            </List>
            {payActive && (
              <iframe
                src="https://chakra-ui.com/"
                width="100%"
                height="300"
                title="prueba"
              ></iframe>
            )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" variant="ghost" mr={3} onClick={onClose}>
              Cancelar
            </Button>
            {prepaid === "Wellness" && (
              <Button colorScheme={"teal"} onClick={() => handleSubmitNotPay()}>
                Confirmar turno
              </Button>
            )}
            {prepaid !== "Wellness" && (
              <Button colorScheme={"teal"} onClick={() => handleSubmitPay()}>
                Ir a Pagar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Payments;
