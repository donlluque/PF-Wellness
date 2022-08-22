import React from "react";
import {
  Center,
  Heading,
  Image,
  Wrap,
  Container,
  Text,
  Box,
  ListIcon,
  ListItem,
  List,
  WrapItem,
} from "@chakra-ui/react";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";

function Prepaid() {
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
    url(https://rehabtiva.com/wp-content/uploads/2014/04/Box-3-Fisioterapia-Osteopat%C3%ADa-Podolog%C3%ADa-Rehabtiva-Las-Rozas.jpg)"
        mb={2}
        flexDirection="column"
      >
        <Heading textAlign="center" as="h1" size="4xl" m="1rem">
          Prestaciones
        </Heading>
        <Box>
          <Text as="i" fontSize="xl">
            "En Wellness queremos ayudarte. Descubre los beneficios de las obras
            sociales con las que trabajamos"
          </Text>
        </Box>
      </Center>

      <Wrap bg="#EDF2F7" justify="center" mt="-2">
        <WrapItem>
          <Box
            m="3rem"
            bg="white"
            w="20rem"
            h="15rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="0.5rem"
          >
            <Image
              src="http://www.elsindical.com.ar/notas/var/www/html/notas/wp-content/uploads/2017/01/Logo-OSDE.jpg"
              alt="img"
              maxW="10rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                0810-5556733
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                contacto@osde.com.ar
              </ListItem>
            </List>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            m="3rem"
            bg="white"
            w="20rem"
            p="1rem"
            h="15rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="0.5rem"
          >
            <Image
              src="https://www.mi-prepaga.com.ar/wp-content/uploads/2019/01/Swiss-Medical.jpg"
              alt="img"
              maxW="13rem"
              mb="1rem"
              minH="6rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                0800-122-1040
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                contacto@swissmedical.com.ar
              </ListItem>
            </List>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            m="3rem"
            h="15rem"
            bg="white"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="0.5rem"
          >
            <Image
              src="https://www.mi-prepaga.com.ar/wp-content/uploads/2019/01/Galeno-768x334.jpg"
              alt="img"
              maxW="10rem"
              minH="6rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                0810-333-4253
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                consultas@galeno.com.ar
              </ListItem>
            </List>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            m="3rem"
            h="15rem"
            bg="white"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="0.5rem"
          >
            <Image
              src="https://www.dentacdigital.com.ar/img/obrassociales-prepagas/logo-medicus.jpg"
              alt="img"
              maxW="10rem"
              minH="8rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                0800-333-3338
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                contactenos@medicus.com.ar
              </ListItem>
            </List>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            m="3rem"
            h="15rem"
            bg="white"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="0.5rem"
          >
            <Image
              src="data:image/png;base64,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"
              alt="img"
              maxW="13rem"
              minH="6rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                (0351) 568 3000
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                comercial@parquesalud.com.ar
              </ListItem>
            </List>
          </Box>
        </WrapItem>
        <WrapItem>
          <Box
            m="3rem"
            h="15rem"
            bg="white"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="0.5rem"
          >
            <Image
              src="https://prepagasyobrassociales.com.ar/wp-content/uploads/2019/11/Prepaga-Medife-2.jpg"
              alt="img"
              maxW="11rem"
              minH="6rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                0800 333 2700
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                info@medife.com.ar
              </ListItem>
            </List>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default Prepaid;
