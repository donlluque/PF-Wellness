import React from "react";
import img1 from "../assets/depositphotos_230692850-stock-photo-man-having-chiropractic-arm-adjustment.jpg";
import img2 from "../assets/csc-instalaciones-gimnasios-768x446.jpg";
import img3 from "../assets/depositphotos_41256383-stock-photo-patient-being-assisted-by-physical.jpg";
import {
  Center,
  Icon,
  Container,
  Heading,
  Box,
  Image,
  Spacer,
  List,
  ListIcon,
  ListItem,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { MdAlternateEmail, MdOutlinePlace } from "react-icons/md";
import { VscCheckAll, VscQuote } from "react-icons/vsc";
function About() {
  return (
    <>
      <Center
        flexDirection="column"
        bgRepeat="no-repeat"
        bgSize="cover"
        h="100vh"
        top={0}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.7),
      rgba(230, 255, 250, 0.7)
    ),
    url(https://www.clinicapremium.com/wp-content/uploads/2020/06/trabaja-en-clinica-premium-marbella.jpg)"
        mb={2}
      >
        <Heading
          textAlign="center"
          as="h1"
          size="4xl"
          m="1rem"
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        >
          Nosotros
        </Heading>
        <Box w={{ base: "75%", sm: "75%", md: "60%" }} textAlign="center">
          <Text as="i" fontSize={{ base: "md", sm: "xl", md: "xl" }}>
            "Estamos justo donde nos necesitas. Experiencia. Servicio.
            Integridad"
          </Text>
        </Box>
      </Center>
      <Container maxW="100%" centerContent>
        <Heading as="h2" size="xl" mt={5} mb={3}>
          ¿Quiénes somos?
        </Heading>
        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          m={5}
          alignItems={{ base: "center", sm: "center", md: "center" }}
        >
          <Box
            p={3}
            m={2}
            w={{ base: "90vw", sm: "80vw", md: "70vw", lg: "40vw" }}
            borderRadius="0.5rem"
          >
            <Text spacing={2} textAlign="center">
              <Text as="i" fontWeight="bold">
                Wellness{" "}
              </Text>{" "}
              es un Centro Especializado en rehabilitación física que nace con
              la idea de brindar un servicio donde se priorice el
              <Text as="i"> bienestar</Text>. Nuestra trayectoria, forjada en la
              excelencia, es la que hoy nos permite realizar tratamientos
              efectivos con la mejor calidad de atención.
            </Text>
          </Box>
          <Image
            width="20rem"
            src={img1}
            alt="img"
            m={3}
            borderRadius="0.5rem"
          />
        </Flex>
        <Box
          bgColor="teal.50"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h2" size="xl" m={5} textAlign="center">
            ¿Por qué nosotros?
          </Heading>
          <Box alignItems="center">
            <Box textAlign="justify" p={2} w={"50vw"}>
              <Icon ml={3} as={VscCheckAll} /> Contamos con la más alta
              tecnología para acompañar de manera óptima su tratamiento.
              <Spacer />
              <Icon ml={3} as={VscCheckAll} /> Contribuimos a mejorar la vida de
              las personas mediante la calidad humana y profesionales altamente
              capacitados.
            </Box>
          </Box>
          <Box>
            <Box display={{ md: "flex" }} justifyContent="center">
              <Image
                src={img2}
                alt="img"
                m={2}
                w="20rem"
                borderRadius="0.5rem"
              />
              <Image
                src={img3}
                alt="img"
                m={2}
                w="20rem"
                borderRadius="0.5rem"
              />
            </Box>
          </Box>
          <Heading as="h5" size="md" textAlign="center" m="2rem">
            <Icon as={VscQuote} /> Nuestra misión es brindar una atención médica
            de primer nivel y lograr la satisfacción total de nuestros
            pacientes.
            <Icon as={VscQuote} style={{ transform: [{ rotateY: "90deg" }] }} />
          </Heading>
        </Box>

        <Box display={{ md: "flex" }} justifyItems="center" alignItems="center">
          <Box>
            <Heading as="h2" size="xl" textAlign="center">
              Contactanos
            </Heading>
            <List spacing={4} p="2rem">
              <ListItem>
                <ListIcon as={BsTelephone} color="teal.900" />
                0800-354-5050
              </ListItem>
              <ListItem>
                <ListIcon as={ImMobile} color="teal.900" />
                +54 9 351 365-4238
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="teal.900" />
                consultaswellness@gmail.com
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={MdOutlinePlace} color="teal.900" />
                Av. Colón 299, Córdoba, Argentina
              </ListItem>
            </List>
          </Box>
          <Box m="1rem" p="1rem" borderRadius="1rem">
            <iframe
              title="mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5405.254985384337!2d-64.19322203134845!3d-31.411447370491572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432987886a77c07%3A0x4f75f1c212944cac!2sAv.%20Col%C3%B3n%20299%2C%20X5000EPC%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sit!4v1660863672409!5m2!1ses!2sit"
              width="500"
              height="300"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </>
  );
}
// border="1px solid gray"
export default About;
