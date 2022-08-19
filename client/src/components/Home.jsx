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
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";

function Home() {
  return (
    <>
      <Center
        h="100vh"
        top={0}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.5),
      rgba(230, 255, 250, 0.5)
    ),
    url(https://www.unitecoprofesional.es/blog/wp-content/uploads/2021/09/como-hacer-una-historia-clinica.jpg)"
        mb={2}
        flexDirection="column"
      >
        <Heading textAlign="center" as="h1" size="4xl" m="1rem">
          Clínica de fisioterapia y
          <Spacer /> rehabilitación física
        </Heading>
        <Box>
          <Text as="i" fontSize="xl">
            "Cuida tu cuerpo. Es el único lugar que tienes para vivir"
          </Text>
        </Box>
      </Center>
      <Container maxW="100vw" centerContent>
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
                  <ListIcon as={FcNext} /> Excelencia médica
                </ListItem>
                <ListItem>
                  <ListIcon as={FcNext} />
                  Atención personalizada
                </ListItem>
                <ListItem>
                  <ListIcon as={FcNext} />
                  Compromiso
                </ListItem>
                <ListItem>
                  <ListIcon as={FcNext} />
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
          <Button colorScheme="teal" m={4}>
            Leer más
          </Button>
        </Link>
      </Container>
      <Container maxW="100vw" centerContent bgColor="teal.50" pb="2rem">
        <Heading as="h2" size="xl" m={8}>
          Especialidades médicas destacadas
        </Heading>
        <SimpleGrid columns={2} spacing={20}>
          <Box display="flex" alignItems="center">
            <Image
              src="https://www.clinicalascondes.cl/Dev_CLC/media/Imagenes/home-traumatologia-2019/intro-traumatologia.jpg"
              alt="img"
              borderRadius="50%"
              boxSize="8rem"
              m="1rem"
            />
            <Box>
              <Heading as="h2" size="lg">
                Traumatología
              </Heading>
              <Link to="/especialidades">
                <Button colorScheme="teal" variant="ghost">
                  Leer más &gt;&gt;
                </Button>
              </Link>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Image
              src="https://blog.agendapro.com/hubfs/kine%20aparatos%20redes%20%281%29.jpg"
              alt="img"
              borderRadius="50%"
              boxSize="8rem"
              m="1rem"
            />
            <Box>
              <Heading as="h2" size="lg">
                Kinesiología
              </Heading>
              <Link to="/especialidades">
                <Button variant="ghost" colorScheme="teal">
                  Leer más &gt;&gt;
                </Button>
              </Link>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Image
              src="https://www.centromartesana.it/wp-content/uploads/2021/05/osteopatia-1.jpg"
              alt="img"
              borderRadius="50%"
              boxSize="8rem"
              m="1rem"
            />
            <Box>
              <Heading as="h2" size="lg">
                Osteopatía
              </Heading>
              <Link to="/especialidades">
                <Button variant="ghost" colorScheme="teal">
                  Leer más &gt;&gt;
                </Button>
              </Link>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <Image
              src="https://centropelegri.com.ar/wp-content/uploads/2021/07/Deportologia-2-300x208.jpg"
              alt="img"
              borderRadius="50%"
              boxSize="8rem"
              m="1rem"
            />
            <Box>
              <Heading as="h2" size="lg">
                Deportología
              </Heading>
              <Link to="/especialidades">
                <Button variant="ghost" colorScheme="teal">
                  Leer más &gt;&gt;
                </Button>
              </Link>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
}

export default Home;
