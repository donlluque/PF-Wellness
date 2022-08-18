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
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Center h="100vh" top={0} bgColor="#fcf7d7" mb={2}>
        <Heading as="h1" size="2xl">
          Clinica de fisioterapia y rehabilitación física
        </Heading>
      </Center>
      <Container border="1px solid red" maxW="100vw" centerContent>
        <Flex direction="row" m={5}>
          <Box>
            <Heading as="h3" size="lg" mt={6} textAlign="center">
              Nuestra Misión
            </Heading>
            <Container m={3} w="40rem">
              Brindar una atención médica personalizada de primer nivel.
            </Container>
          </Box>
          <Image
            width="20rem"
            objectFit="cover"
            src="https://st2.depositphotos.com/2249091/8550/i/450/depositphotos_85502714-stock-photo-small-boy-with-kinesio-tape.jpg"
            alt="Dan Abramov"
          />
        </Flex>
        <Flex m={5}>
          <Image
            width="20rem"
            objectFit="cover"
            src="https://www.utalca.cl/content/uploads/2019/04/nota_kine.jpg"
            alt="Dan Abramov"
          />
          <Box>
            <Heading as="h3" size="lg" mt={6} textAlign="center">
              Nuestra Visión
            </Heading>
            <Container m={3} w="40rem">
              Constituirnos como un centro líder en rehabilitación física, con
              los mejores profesionales y la más alta calidad de atención a
              nuestros pacientes.
            </Container>
          </Box>
        </Flex>
        <Flex m={5} maxW="100%">
          <Box>
            <Heading as="h3" size="lg" mt={6} textAlign="center">
              Nuestros Valores
            </Heading>
            <Container m={3} w="40rem">
              <List spacing={3}>
                <ListItem>
                  <ListIcon /> Excelencia médica
                </ListItem>
                <ListItem>
                  <ListIcon />
                  Atención personalizada
                </ListItem>
                <ListItem>
                  <ListIcon />
                  Compromiso
                </ListItem>
                <ListItem>
                  <ListIcon />
                  Respeto
                </ListItem>
              </List>
            </Container>
          </Box>
          <Image
            width="20rem"
            objectFit="cover"
            src="https://www.ccdm.cl/wp-content/uploads/2014/12/IMG_4854.jpg"
            alt="Dan Abramov"
          />
        </Flex>
        <Link to="/about">
          <Button colorScheme="blue" m={4}>
            Leer más
          </Button>
        </Link>
      </Container>
      <Container maxW="100vw" centerContent bgColor="#fcf7d7">
        <Heading as="h2" size="lg" m={8}>
          Especialidades médicas destacadas
        </Heading>
        <SimpleGrid columns={2} spacing={20}>
          <Box bg="tomato" height="100px" w="200px">
            Especialidad 1
          </Box>
          <Box bg="tomato" height="100px" w="200px">
            Especialidad 2
          </Box>
          <Box bg="tomato" height="100px" w="200px">
            Especialidad 3
          </Box>
          <Box bg="tomato" height="100px" w="200px">
            Especialidad 4
          </Box>
        </SimpleGrid>
        <Link to="/especialidades">
          <Button colorScheme="blue" m={4}>
            Ver todas
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default Home;
