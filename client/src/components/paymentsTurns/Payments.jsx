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
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  dataPayment,
  getHours,
  getOnePatient,
  getPrepaidHealth,
  postTurn,
  sendEmailPago,
} from "../../redux/actions";
import axios from "axios";
import { baseURL } from "../../index.js";
import { Link } from "react-router-dom";

function Payments({ onClose, isOpen, onOpen, form, active }) {
  const dispatch = useDispatch();
  const { doctorDetail, patientDetail, prepaidHealth, hoursWorking, user } =
    useSelector((state) => state);
  const confirmModal = useDisclosure();
  const [wellnessPrepaid, setWellnessPrepaid] = useState(false);
  const [withoutPrepaid, setWithoutPrepaid] = useState(false);
  const [link, setLink] = useState();
  const [prepaid, setPrepaid] = useState("");
  const [payActive, setPayActive] = useState(false);
  const [input, setInput] = useState({
    title: "",
    cost: 0,
    percentage: 0,
    price: 0,
  });

  let auxHour = hoursWorking?.find((e) => e.id === parseInt(form.idHour));

  useEffect(() => {
    dispatch(getOnePatient(form.idPatient));
    dispatch(getPrepaidHealth());
    dispatch(getHours());
    setPrepaid(handlePrepaid());
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
          let prepaidPatient = patientDetail?.prepaid_healths
            ? patientDetail?.prepaid_healths[0].name
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
    confirmModal.onOpen();
    dispatch(sendEmailPago(user));
  };

  const handleSubmitPay = async () => {
    setPayActive(true);
    dispatch(dataPayment(form));
    try {
      const generarLink = await axios.post(`${baseURL}/pagos`, input);
      setLink(generarLink.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (result) => {
    let cost = doctorDetail.general_area?.costConsult;
    if (result === "Wellness") {
    } else if (result === "Particular") {
      let percentage = 0;
      setInput({
        ...input,
        title: doctorDetail.general_area?.name,
        cost,
        percentage,
        price: cost,
      });
    } else if (
      result === "Galeno" ||
      result === "Osde" ||
      result === "Parque Salud" ||
      result === "Medicus" ||
      result === "Swiss Medical" ||
      result === "Medife"
    ) {
      let percentage = prepaidHealth.find((e) => e.name === result).percentage;

      let price = cost - percentage * cost;

      setInput({
        ...input,
        title: doctorDetail.general_area?.name,
        percentage,
        cost,
        price,
      });
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        closeOnOverlayClick={false}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader colorScheme="teal">Confirmar turno</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box
              display="flex"
              flexDirection={{
                base: "column",
                sm: "column",
                md: "row",
                lg: "row",
                xl: "row",
              }}
              justifyContent="space-evenly"
              alignItems={"center"}
            >
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
                  {doctorDetail.general_area?.name}
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
                  {auxHour && auxHour.hour}
                </ListItem>
              </List>
              <List spacing={3} m="1rem">
                {prepaid !== "Wellness" && (
                  <ListItem>
                    <Text fontWeight="semibold" display="inline">
                      Costo consulta:
                    </Text>{" "}
                    {input.cost}
                  </ListItem>
                )}
                {(prepaid !== "Wellness" || prepaid !== "Particular") && (
                  <ListItem>
                    <Text fontWeight="semibold" display="inline">
                      Cobertura Obra Social:
                    </Text>{" "}
                    {input.percentage * 100}%
                  </ListItem>
                )}
                {prepaid !== "Wellness" && (
                  <ListItem>
                    <Text fontWeight="semibold" display="inline">
                      Monto a pagar:
                    </Text>{" "}
                    {input.price}
                  </ListItem>
                )}
              </List>
              {prepaid === "Wellness" && (
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  w={{ base: "75%", sm: "75%", md: "50%" }}
                  p="2rem"
                >
                  <AlertIcon boxSize="40px" />
                  <AlertTitle mt={4} mb={1} fontSize="lg">
                    Usuario premium!
                  </AlertTitle>
                  Consulta bonificada por Wellness. Gracias por ser parte!
                </Alert>
              )}
            </Box>

            {prepaid !== "Wellness" && (
              <Alert status="info" display={"flex"} flexDirection="column">
                <Box display={"flex"} flexDirection="row">
                  <AlertIcon />
                  <AlertTitle>Wellness Asociados!</AlertTitle>
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
                  <Link to="/wellnessPrepaid">
                    <Button mt={"0.5rem"}>Suscribirse</Button>
                  </Link>
                </Box>
              </Alert>
            )}

            {payActive && (
              <Box>
                <iframe
                  border="3px solid black"
                  src={link}
                  width="100%"
                  height="500"
                  title="prueba"
                  allow="fullscreen"
                ></iframe>
              </Box>
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
            {prepaid !== "Wellness" && !payActive && (
              <Button colorScheme={"teal"} onClick={() => handleSubmitPay()}>
                Pagar
              </Button>
            )}
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/*MODAL CONFIRM TURNO SIN PAGAR*/}
      <Modal
        blockScrollOnMount={false}
        isOpen={confirmModal.isOpen}
        onClose={confirmModal.onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"teal.50"} colorScheme="teal">
          <ModalHeader colorScheme="teal" textAlign={"center"} fontSize="2xl">
            Turno confirmado!
          </ModalHeader>
          <ModalBody colorScheme="teal" textAlign={"center"}>
            <Text mb="1rem">
              Hemos enviado un mail con la confirmación del turno. Por favor
              revisa tu correo electronico.
            </Text>
            <Text
              colorScheme="teal"
              fontWeight="semibold"
              m="1rem"
              mb="0"
              fontSize={"lg"}
            >
              Gracias por confiar en nosotros!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Link to="/">
              <Button colorScheme="teal">Cerrar</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Payments;
