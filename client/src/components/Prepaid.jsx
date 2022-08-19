import React from "react";
import {
  Center,
  Heading,
  Image,
  Wrap,
  Container,
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
      <Center h="100vh" top={0} bgColor="#fcf7d7" mb={2}>
        <Heading as="h1" size="2xl">
          Prestaciones
        </Heading>
      </Center>
      <Wrap justify="center">
        <WrapItem>
          <Box
            m="3rem"
            border="1px solid gray"
            w="20rem"
            h="15rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
            
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
            border="1px solid gray"
            w="20rem"
            p="1rem"
            h="15rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
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
            border="1px solid gray"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
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
            border="1px solid gray"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
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
            border="1px solid gray"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
          >
            <Image
              src="http://www.estudionayi.com.ar/imagenes_misaplicaciones/WG4_17984___WG4_17984___parque.png"
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
            border="1px solid gray"
            w="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
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
