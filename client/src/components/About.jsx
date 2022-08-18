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
} from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { ImMobile } from "react-icons/im";
import { MdAlternateEmail, MdOutlinePlace } from "react-icons/md";
import { VscCheckAll, VscQuote } from "react-icons/vsc";
function About() {
  return (
    <>
      <Center h="100vh" top={0} bgColor="#fcf7d7" mb={2}>
        <Heading as="h1" size="2xl">
          Nosotros
        </Heading>
      </Center>
      <Container maxW="100%" centerContent>
        <Heading as="h2" size="lg" m={5}>
          ¿Quiénes somos?
        </Heading>
        <Box display={{ md: "flex" }} alignItems="justify">
          <Box p={3} w="40vw" m={2}>
            Wellness es un Centro Especializado en rehabilitación física que
            nace con la idea de brindar un servicio donde se priorice el
            bienestar. Nuestra trayectoria, forjada en la excelencia, es la que
            hoy nos permite realizar tratamientos efectivos con la mejor calidad
            de atención.
          </Box>
          <Image width="20rem" src={img1} alt="img" m={3} />
        </Box>
        <Box
          bgColor="#fcf7d7"
          w="100%"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Heading as="h2" size="lg" m={5} textAlign="center">
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
              <Image src={img2} alt="img" m={2} w="20rem" />
              <Image src={img3} alt="img" m={2} w="20rem" />
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
            <Heading as="h2" size="lg" textAlign="center">
              Contactanos
            </Heading>
            <List spacing={4} p="2rem">
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                0800-354-5050
              </ListItem>
              <ListItem>
                <ListIcon as={ImMobile} color="green.500" />
                +54 9 351 365-4238
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                consultaswellness@gmail.com
              </ListItem>
              {/* You can also use custom icons from react-icons */}
              <ListItem>
                <ListIcon as={MdOutlinePlace} color="green.500" />
                Av. Colón 299, Córdoba, Argentina
              </ListItem>
            </List>
          </Box>
          <Box m="1rem" border="1px solid gray" p="1rem" borderRadius="1rem">
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

export default About;
