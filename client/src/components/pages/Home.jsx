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
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FcNext } from "react-icons/fc";
import Testimonios from "./Testimonios";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

function Home() {
  //-----Estilos para modo oscuro----//
  const colorLetra = useColorModeValue("#1a202c", "#4A5568");
  const bg = useColorModeValue("#e6fffa", "#E2E8F0");
  const color = useColorModeValue("#285E61", "#4A5568");
  const colorL = useColorModeValue("#38B2AC", "black");
  const botonBg = useColorModeValue("#319795", "#718096");
  const colorBt = useColorModeValue("white", "white");
  //---------------------------------//

  return (
    <>
      <Center
        h={{ base: "125vh", sm: "125vh", md: "100vh", lg: "100vh" }}
        bgRepeat="no-repeat"
        bgSize="cover"
        top={0}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.5),
      rgba(230, 255, 250, 0.5)
    ),
    url(https://www.unitecoprofesional.es/blog/wp-content/uploads/2021/09/como-hacer-una-historia-clinica.jpg)"
        mb={2}
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          m="1rem"
          mt={{ base: "6rem", sm: "6rem", md: "4rem", lg: "1rem" }}
          color={colorLetra}
        >
          Clínica de fisioterapia y
          <Spacer /> rehabilitación física
        </Heading>
        <Box textAlign={"center"} w={{ base: "75%", sm: "75%", md: "60%" }}>
          <Text as="i" fontSize="xl" color={colorLetra}>
            "Cuida tu cuerpo. Es el único lugar que tienes para vivir"
          </Text>
        </Box>
      </Center>
      <Container
        border="1px solid red"
        maxW="100%"
        centerContent
        bgImage="
        url(https://cdn.discordapp.com/attachments/1009488625219678269/1016439728666595328/fondo-dorado-o-textura-sombra-degradados_38648-63.jpg)"
        pb="2rem"
        textAlign="center"
      >
        <Heading
          color="white"
          mt="3rem"
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
        >
          Asociate a Wellness y disfruta de una cobertura total
        </Heading>
        <Box
          m="3rem"
          bgPosition="55%"
          bgImage="linear-gradient(
              rgba(230, 255, 250, 0.7),
              rgba(230, 255, 250, 0.7)
            ),
            url(https://www.wedskenya.com/wp-content/uploads/2019/03/Cute-Holding-Hands-Quotes.jpg)"
          bgRepeat="no-repeat"
          bgSize="cover"
          w="85vw"
          h={{ xl: "15rem" }}
          p="1rem"
          display="flex"
          flexDirection={{
            base: "column",
            sm: "column",
            md: "column",
            lg: "column",
            xl: "row",
          }}
          justifyContent="space-around"
          alignItems="center"
          boxShadow="dark-lg"
          borderRadius="0.5rem"
          filter="grayscale(10%)"
          border="2px"
          borderColor="#D69E2E"
        >
          <Image
            src={
              "https://cdn.discordapp.com/attachments/1009488625219678269/1016320991221252217/WellnessPremium.png"
            }
            alt="img"
            w={{ base: "20rem", sm: "20rem", md: "20rem", lg: "25rem" }}
            mb="1rem"
          />
          <List spacing={4} fontSize="2xl">
            <ListItem>
              <ListIcon as={BsTelephone} color="green.600" />
              +54 9 351 365-4238
            </ListItem>
            <ListItem>
              <ListIcon as={MdAlternateEmail} color="green.600" />
              wellnesclinica@gmail.com
            </ListItem>
            <ListItem color="green.600" fontWeight={"bold"}>
              <ListIcon as={FaRegMoneyBillAlt} color="green.600" />
              100%
            </ListItem>
          </List>
          <Link to="/wellnessPrepaid">
          <Button
            mt={{
              base: "1rem",
              sm: "1rem",
              md: "1rem",
              lg: "1rem",
              xl: "0.5rem",
            }}
            bg="#D69E2E"
            w={"15rem"}
            h={"4rem"}
            fontSize={"3xl"}
            fontWeight={"bold"}
            boxShadow="dark-lg"
          >
            Suscribirse
          
          </Button>
          </Link>
        </Box>
      </Container>
      <Container maxW="100%" centerContent>
        <Flex
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          m={5}
          alignItems={{ base: "center", sm: "center", md: "center" }}
        >
          <Box>
            <Heading as="h3" size="lg" mt={6} textAlign="center">
              Nuestra Misión
            </Heading>
            <Container m={3} w="100%">
              Brindar una atención médica personalizada de primer nivel.
            </Container>
          </Box>
          <Image
            width="20rem"
            objectFit="cover"
            src="https://st2.depositphotos.com/2249091/8550/i/450/depositphotos_85502714-stock-photo-small-boy-with-kinesio-tape.jpg"
            alt="Dan Abramov"
            borderRadius="0.5rem"
          />
        </Flex>
        <Flex
          m={5}
          direction={{
            base: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}
          alignItems="center"
        >
          <Image
            width="20rem"
            objectFit="cover"
            src="https://www.utalca.cl/content/uploads/2019/04/nota_kine.jpg"
            alt="Dan Abramov"
            borderRadius="0.5rem"
          />
          <Box>
            <Heading as="h3" size="lg" mt={6} textAlign="center">
              Nuestra Visión
            </Heading>
            <Container m={3} w="100%">
              Constituirnos como un centro líder en rehabilitación física, con
              los mejores profesionales y la más alta calidad de atención a
              nuestros pacientes.
            </Container>
          </Box>
        </Flex>
        <Flex
          m={5}
          maxW="100%"
          direction={{ base: "column", sm: "column", md: "column", lg: "row" }}
          alignItems="center"
        >
          <Box>
            <Heading as="h3" size="lg" mt={6} textAlign="center">
              Nuestros Valores
            </Heading>
            <Container m={3} w="40rem">
              <List
                spacing={3}
                display="flex"
                flexDirection="column"
                alignItems={{
                  base: "center",
                  sm: "center",
                  md: "center",
                  lg: "start",
                }}
              >
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
            borderRadius="0.5rem"
          />
        </Flex>
        <Link to="/about">
          <Button colorScheme="teal" m={4} bg={botonBg} color={colorBt}>
            Leer más
          </Button>
        </Link>
      </Container>
      <Container
        maxW="100%"
        centerContent
        bg={bg}
        color={color}
        pb="2rem"
        textAlign="center"
      >
        <Heading as="h2" size="xl" m={8}>
          Especialidades médicas destacadas
        </Heading>
        <SimpleGrid
          columns={{ base: 1, sm: 1, md: 2 }}
          spacing={20}
          alignItems="center"
        >
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
                <Button colorScheme="teal" variant="ghost" color={colorL}>
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
                <Button variant="ghost" colorScheme="teal" color={colorL}>
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
                <Button variant="ghost" colorScheme="teal" color={colorL}>
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
                <Button variant="ghost" colorScheme="teal" color={colorL}>
                  Leer más &gt;&gt;
                </Button>
              </Link>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
      <Container
        border="1px solid red"
        maxW="100%"
        centerContent
        bgColor="white"
        pb="2rem"
        textAlign="center"
      >
        <Heading as="h2" size="xl" m={8} color={colorL}>
          Lo que opinan nuestros pacientes
        </Heading>

        <Testimonios />
        <Link to="/opiniones">
          <Button colorScheme="teal" m={4}>
            Leer más
          </Button>
        </Link>
      </Container>
    </>
  );
}

export default Home;
