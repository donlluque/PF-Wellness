import React from "react";
import {
  Center,
  Heading,
  Image,
  Wrap,
  Text,
  Box,
  ListIcon,
  ListItem,
  List,
  WrapItem,
  Button,
} from "@chakra-ui/react";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPrepaidHealth } from "../../redux/actions";
import { Link } from "react-router-dom";
import img from "../../img/logo-medicus.jpg";

function Prepaid() {
  const dispatch = useDispatch();
  const { prepaidHealth } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getPrepaidHealth());
  }, [dispatch]);
  return (
    <>
      <Center
        h={{ base: "125vh", sm: "125vh", md: "100vh", lg: "100vh" }}
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
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          m="1rem"
          mt={{ base: "6rem", sm: "6rem", md: "4rem", lg: "1rem" }}
        >
          Prestaciones
        </Heading>
        <Box w={{ base: "75%", sm: "75%", md: "60%" }} textAlign="center">
          <Text as="i" fontSize="xl">
            "En Wellness queremos ayudarte. Descubre los beneficios de las obras
            sociales con las que trabajamos"
          </Text>
        </Box>
      </Center>
      <Box display="flex" justifyContent={"center"} w="100%">
        <Box
          m="3rem"
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
          <List
            spacing={4}
            fontSize={{ base: "xl", sm: "xl", md: "2xl", lg: "2xl", xl: "2xl" }}
          >
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
              w={{
                base: "12rem",
                sm: "12rem",
                md: "12rem",
                lg: "15rem",
                xl: "15rem",
              }}
              h={{
                base: "3rem",
                sm: "3rem",
                md: "4rem",
                lg: "4rem",
                xl: "4rem",
              }}
              fontSize={{
                base: "2xl",
                sm: "2xl",
                md: "2xl",
                lg: "3xl",
                xl: "3xl",
              }}
              fontWeight={"bold"}
              boxShadow="dark-lg"
            >
              Suscribirse
            </Button>
          </Link>
        </Box>
      </Box>

      <Wrap bg="#EDF2F7" justify="center" mt="-2" w="100vw">
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
              src={prepaidHealth[0]?.logo}
              alt="img"
              maxW="10rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                {prepaidHealth[0]?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                {prepaidHealth[0]?.address}
              </ListItem>
              <ListItem color="green.500">
                <ListIcon as={FaRegMoneyBillAlt} color="green.500" />
                {prepaidHealth[0]?.percentage * 100}%
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
              src={prepaidHealth[1]?.logo}
              alt="img"
              maxW="13rem"
              mb="1rem"
              minH="6rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                {prepaidHealth[1]?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                {prepaidHealth[1]?.address}
              </ListItem>
              <ListItem color="green.500">
                <ListIcon as={FaRegMoneyBillAlt} color="green.500" />
                {prepaidHealth[1]?.percentage * 100}%
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
              src={prepaidHealth[2]?.logo}
              alt="img"
              maxW="10rem"
              minH="6rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                {prepaidHealth[2]?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                {prepaidHealth[2]?.address}
              </ListItem>
              <ListItem color="green.500">
                <ListIcon as={FaRegMoneyBillAlt} color="green.500" />
                {prepaidHealth[2]?.percentage * 100}%
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
              src={prepaidHealth[3]?.logo}
              alt="img"
              maxW="12rem"
              minH="6rem"
              mb="0.5rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                {prepaidHealth[3]?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                {prepaidHealth[3]?.address}
              </ListItem>
              <ListItem color="green.500">
                <ListIcon as={FaRegMoneyBillAlt} color="green.500" />
                {prepaidHealth[3]?.percentage * 100}%
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
              src={prepaidHealth[4]?.logo}
              alt="img"
              maxW="13rem"
              minH="6rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                {prepaidHealth[4]?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                {prepaidHealth[4]?.address}
              </ListItem>
              <ListItem color="green.500">
                <ListIcon as={FaRegMoneyBillAlt} color="green.500" />
                {prepaidHealth[4]?.percentage * 100}%
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
              src={prepaidHealth[5]?.logo}
              alt="img"
              maxW="11rem"
              minH="6rem"
              mb="1rem"
            />
            <List spacing={3}>
              <ListItem>
                <ListIcon as={BsTelephone} color="green.500" />
                {prepaidHealth[5]?.phone}
              </ListItem>
              <ListItem>
                <ListIcon as={MdAlternateEmail} color="green.500" />
                {prepaidHealth[5]?.address}
              </ListItem>
              <ListItem color="green.500">
                <ListIcon as={FaRegMoneyBillAlt} color="green.500" />
                {prepaidHealth[5]?.percentage * 100}%
              </ListItem>
            </List>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
}

export default Prepaid;
