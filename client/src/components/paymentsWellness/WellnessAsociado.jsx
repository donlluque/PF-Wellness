import {
  Box,
  Container,
  Heading,
  Image,
  Flex,
  List,
  Button,
  ListItem,
  ListIcon,
  Center,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import PaymentModal from "./PaymentModal";
import { baseURL } from "../../index";
import axios from "axios";

function WellnessAsociados() {
  const [paymentActive, setPaymentActive] = useState(false);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const dispatch = useDispatch();
  const [link, setLink] = useState();
  const [input, setInput] = useState({
    reason: "Wellness Asociados",
    price: 7000,
  });
  console.log("link", link);

  //Se pueden definir tres tipos de suscripciones --> Bimestral, semestral, anual y variar el monto

  const handlePayment = async () => {
    setPaymentActive(true);
    onOpen()
    try {
      const generarLink = await axios.post(`${baseURL}/asociados`, input);
      console.log(generarLink)
      setLink(generarLink.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {" "}
      <Center
        h={{ base: "125vh", sm: "125vh", md: "100vh", lg: "100vh" }}
        bgRepeat="no-repeat"
        bgSize="cover"
        top={0}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.5),
      rgba(230, 255, 250, 0.7)
    ),
    url(https://revistavive.com/wp-content/uploads/2017/12/la-felicidad.jpg)"
        mb={2}
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          m="1rem"
          mt={{ base: "6rem", sm: "6rem", md: "4rem", lg: "1rem" }}
        >
          Asociate a Wellness
        </Heading>
        <Box w={{ base: "75%", sm: "75%", md: "60%" }} textAlign="center">
          <Text as="i" fontSize="xl">
            "Vivi la experiencia Wellness al 100%"
          </Text>
        </Box>
      </Center>
      <Button colorScheme="teal" onClick={() => handlePayment()}>
        Suscribirse
      </Button>
      <PaymentModal
        paymentActive={paymentActive}
        onClose={onClose}
        isOpen={isOpen}
        linkPayment={link}
      />
    </>
  );
}

export default WellnessAsociados;
