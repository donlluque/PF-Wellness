import React from "react";
import deportologia from "../img/deportologia.jpg";
import kinesiologia from "../img/kine.jpg";
import osteopatia from "../img/osteo.jpg";
import quiropraxia from "../img/quiropraxia.jpg";
import reumatologia from "../img/reumato.jpg";
import terapiaDeDolor from "../img/terapiadedolor.jpeg";
import traumatologia from "../img/traumato.webp";
import {
  Stack,
  Center,
  Heading,
  Box,
  List,
  Image,
  ListItem,
  ListIcon,
  Container,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";
function Specialties() {
  return (
    <>
      <Center
        h="100vh"
        top={0}
        bgRepeat="no-repeat"
        bgSize="cover"
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.7),
      rgba(230, 255, 250, 0.7)
    ),
    url(http://noticias.unsam.edu.ar/wp-content/uploads/2014/04/Kinesiologie.jpg)"
        mb={2}
        flexDirection="column"
      >
        <Heading textAlign="center" as="h1" size="4xl" m="1rem">
          Especialidades <Spacer /> Médicas
        </Heading>
        <Box>
          <Text as="i" fontSize="xl">
            "El conocimiento hace la diferencia"
          </Text>
        </Box>
      </Center>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Stack pt="2rem" borderRadius="1.5rem" w="100%">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Deportología
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                Si realizas actividad fisica o deportes, también contamos con un
                área especialmente dedicada a eso, con excelentes profesionales
                especializados en distintas ramas de la misma:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Esguinces
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Fracturas
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Hernias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Ligamentos
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              alt="deportologia"
              src={deportologia}
              p="1rem"
              borderRadius="1rem"
              bgColor="white"
              mr="5rem"
            />
          </Box>
        </Stack>
        <Stack pt="2rem" borderRadius="1.5rem" w="100%" bgColor="teal.50">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Kinesiología y Fisioterapia
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                Para poder realizar tratamientos de recuperación de lesiones y
                procurar fortalecer el cuerpo, contamos con excelentes
                licenciados dedicados a esta área, que a su vez se especializan
                en distintas ramas de la misma:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Columna
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Lumbalgia
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Miembro Superior
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Neuralgia
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Respiratoria
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              alt="kineyfisio"
              src={kinesiologia}
              p="1rem"
              borderRadius="1rem"
              bgColor="white"
              mr="5rem"
              maxW="30rem"
            />
          </Box>
        </Stack>
        <Stack pt="2rem" borderRadius="1.5rem" w="100%">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Osteopatía
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                Si lo que buscas es una medicina alternativa, nosotros contamos
                con la practica de la Osteopatía, que enfatiza la manipulación
                física del tejido muscular y óseo. Contamos con excelentes
                profesionales dedicados especificamente a esta área, que a su
                vez se especializan en distintas ramas de la misma:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Miembro Inferior
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Miembro Superior
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              alt="osteopatia"
              src={osteopatia}
              maxW="30rem"
              p="1rem"
              borderRadius="1rem"
              bgColor="white"
              mr="5rem"
            />
          </Box>
        </Stack>
        <Stack pt="2rem" borderRadius="1.5rem" w="100%" bgColor="teal.50">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Quiropraxia
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                Otro tipo de medicina alternativa con la que contamos es para
                tratar los trastornos mecánicos del sistema musculoesquelético y
                poder asi con su correccion mejorar tu salud, podes encontrar
                profesionales dedicados especificamente a esta área, que a su
                vez se especializan en distintas ramas de la misma:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Cadera
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Cervicalgias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Columna
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Dorsalgias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Hombro
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              alt="quiropraxia"
              src={quiropraxia}
              p="1rem"
              borderRadius="1rem"
              minW="25rem"
              bgColor="white"
              mr="5rem"
            />
          </Box>
        </Stack>
        <Stack pt="2rem" borderRadius="1.5rem" w="100%">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Reumatología
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                En el caso en que necesites un especialista en medicina interna
                que este capacitado para el diagnostico y tratamiento de
                enfermedades osteomusculares y afecciones autoinmunitarias
                sistémicas, habitualmente denominadas enfermedades reumáticas,
                contamos con excelentes profesionales dedicados a esta área, que
                a su vez se especializan en distintas ramas de la misma:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Artritis
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Artrosis
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Reumatismo
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Dorsalgias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Hombro
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              alt="reumatologia"
              src={reumatologia}
              p="1rem"
              borderRadius="1rem"
              maxW="30rem"
              bgColor="white"
              mr="5rem"
            />
          </Box>
        </Stack>
        <Stack pt="2rem" borderRadius="1.5rem" w="100%" bgColor="teal.50">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Terapia de Dolor
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                Si queres mejorar tu calidad de vida, debido a que sufris dolor
                crónico esta rama interdisciplinaria de la medicina es la
                adecuada para vos. Aqui vas a encontrar a los mejores
                profesionales especializados en:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Columna
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Mano
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Pie
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              borderRadius="1rem"
              alt="terapiaDeDolor"
              src={terapiaDeDolor}
              p="1rem"
              maxW="30rem"
              bgColor="white"
              mr="5rem"
            />
          </Box>
        </Stack>
        <Stack pt="2rem" borderRadius="1.5rem" w="100%">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Traumatología
          </Heading>
          <Box display={{ md: "flex" }} p="2rem">
            <Container centerContent>
              <Text w="100%" textAlign="justify">
                En el caso en que quieras consultar con un médico por alguna
                lesión que sufriste en el aparato locomotor, contamos con
                excelentes profesionales dedicados especificamente a esta área,
                que a su vez se especializan en distintas ramas de la misma:
              </Text>
              <List spacing={3} w="100%" pl="3rem" pt="1rem">
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Cadera
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Hombro
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Pediatría
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Pie
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="teal.900" />
                  Rodilla
                </ListItem>
              </List>
            </Container>
            <Image
              border="1px solid gray"
              borderRadius="1rem"
              alt="traumatologia"
              src={traumatologia}
              p="1rem"
              bgColor="white"
              mr="5rem"
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
}

export default Specialties;
