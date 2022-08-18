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
} from "@chakra-ui/react";
import { FcApproval } from "react-icons/fc";

function Specialties() {
  return (
    <>
      <Center h="100vh" top={0} bgColor="#fcf7d7" mb={2}>
        <Heading as="h1" size="2xl">
          Especialidades Médicas
        </Heading>
      </Center>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Stack pt="2rem" borderRadius="1.5rem" w="100%">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Deportologia
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
        <Stack pt="2rem" borderRadius="1.5rem" w="100%" bgColor="#fcf7d7">
          <Heading as="h2" size="2xl" pt="1rem" textAlign="center">
            Kinesiologia y Fisioterapia
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
                  <ListIcon as={FcApproval} color="green.500" />
                  Columna
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Lumbalgia
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Miembro Superior
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Neuralgia
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
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
            Osteopatia
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
                  <ListIcon as={FcApproval} color="green.500" />
                  Miembro Inferior
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
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
        <Stack pt="2rem" borderRadius="1.5rem" w="100%" bgColor="#fcf7d7">
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
                  <ListIcon as={FcApproval} color="green.500" />
                  Cadera
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Cervicalgias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Columna
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Dorsalgias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
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
                  <ListIcon as={FcApproval} color="green.500" />
                  Artritis
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Artrosis
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Reumatismo
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Dorsalgias
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
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
        <Stack pt="2rem" borderRadius="1.5rem" w="100%" bgColor="#fcf7d7">
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
                  <ListIcon as={FcApproval} color="green.500" />
                  Columna
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Mano
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
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
                  <ListIcon as={FcApproval} color="green.500" />
                  Cadera
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Hombro
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Pediatria
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
                  Pie
                </ListItem>
                <ListItem>
                  <ListIcon as={FcApproval} color="green.500" />
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
