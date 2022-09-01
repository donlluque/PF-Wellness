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
  Spacer,
  Text,
} from "@chakra-ui/react";
function WellnessAsociados() {
  return (
    <>
      {" "}
      <Center
        border="1px solid red"
        h={{ base: "125vh", sm: "125vh", md: "100vh", lg: "100vh" }}
        bgRepeat="no-repeat"
        bgSize="cover"
        top={0}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.5),
      rgba(230, 255, 250, 0.7)
    ),
    url(https://images.ecestaticos.com/EITuWbZ95w5JSBEoowuB341Wlao=/0x0:1305x804/1200x900/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F6eb%2Fb99%2F2e7%2F6ebb992e7484c84dce8d4d64e8f2b714.jpg)"
        mb={2}
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "2xl", sm: "4xl", md: "5xl", lg: "6xl" }}
          m="1rem"
          mt={{ base: "6rem", sm: "6rem", md: "4rem", lg: "1rem" }}
        >
          Asociate a Wellness
        </Heading>
        <Box w={{ base: "75%", sm: "75%", md: "60%" }} textAlign="center">
          <Text as="i" fontSize="xl">
            "Vivi la experiencia Wellness al 100%"
          </Text>
        </Box>
      </Center>
    </>
  );
}

export default WellnessAsociados;
