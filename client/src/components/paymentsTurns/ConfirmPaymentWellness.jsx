import { Heading, Box, Button, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { postTurn, sendEmailPago } from "../../redux/actions";
import { baseURL } from "../../index";

function ConfirmPaymentWellness() {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { form, user } = useSelector((state) => state);

  const handleSubmit = () => {
    if (search.includes("approved")) {
      dispatch(postTurn(form));
      dispatch(sendEmailPago(user));
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Heading
          textColor="teal.500"
          mt={{
            base: "22rem",
            sm: "22rem",
            md: "15rem",
            lg: "15rem",
            xl: "6rem",
          }}
          p="1rem"
          textAlign="center"
          as="h3"
          size="2xl"
          w="70vw"
          bgColor="teal.50"
          borderTopRadius="2rem"
        >
          Pago confirmado!
        </Heading>
        <Box
          w="70vw"
          textAlign="center"
          fontSize="1.5rem"
          alignItems="center"
          p="2rem"
          pt={0}
          bgColor="teal.50"
          borderBottomRadius="2rem"
        >
          <Text
            colorScheme="teal"
            fontWeight="bold"
            m="1rem"
            textAlign={"center"}
            fontSize={"3xl"}
          >
            Bienvenido a{" "}
            <Text display="inline" color="#D69E2E">
              Wellness Asociados
            </Text>{" "}
            !
          </Text>
          <Text mb="1rem">
            Sigue navegando por la web y descubre todos los beneficios que
            tenemos para ofrecerte
          </Text>
          <Text mb="1rem" fontSize={"lg"}>
            Hemos enviado un mail con la confirmación. Por favor revisa tu
            correo electronico.
          </Text>
          <Text colorScheme="teal" fontWeight="semibold" m="1rem" mb="0">
            Gracias por confiar en nosotros!
          </Text>
        </Box>
        <a href={`${baseURL}`}>
          <Button m="1rem" colorScheme={"teal"}>
            Volver al Home
          </Button>
        </a>
      </Box>
    </>
  );
}

export default ConfirmPaymentWellness;