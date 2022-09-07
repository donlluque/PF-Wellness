import React from "react";
import {
  Box,
  Text,
  Flex,
  Wrap,
  WrapItem,
  Center,
  Heading,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviews } from "../../redux/actions";
import ReactStars from "react-rating-stars-component";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Opiniones() {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getReviews());
  }, [dispatch]);
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
    url(https://img.freepik.com/foto-gratis/pareja-sonriente-sentada-sofa-telefonos-adorable-mujer-joven-smartphone_197531-12185.jpg?w=740&t=st=1661976512~exp=1661977112~hmac=4bcaf3f2942e55c0925122b37e77392fbcd08ae64ad52b2cc5a8ff2dc9a37722)"
        mb={2}
        flexDirection="column"
      >
        <Heading
          textAlign="center"
          as="h1"
          size="4xl"
          m="1rem"
          mt={{ base: "4rem", sm: "4rem", md: "4rem", lg: "1rem" }}
        >
          Testimonios
        </Heading>
        <Box>
          <Text as="i" fontSize="xl">
            "En Wellness tu opinión nos importa"
          </Text>
        </Box>
      </Center>
      <Wrap justify="center" spacing="2rem" bg="#EDF2F7">
        {reviews &&
          reviews.map((e) => (
            <WrapItem p={4} borderRadius="0.5rem">
              <Box
                display={"flex"}
                flexDirection="column"
                justifyContent={"center"}
                p={3}
                boxShadow="2xl"
                borderRadius="0.5rem"
                w="20rem"
                h="15rem"
                bgColor="white"
              >
                <Box p={3} justifyContent="center">
                  <Icon ml={3} as={ImQuotesLeft} color="teal.600" />
                  <Spacer />
                  <Text
                    color="teal.600"
                    align="center"
                    m="1rem"
                    fontSize={"15px"}
                    pb={4}
                    as="cite"
                  >
                    {e.review}
                  </Text>
                  <Spacer />
                  <Icon ml={20} as={ImQuotesRight} color="teal.600" />
                </Box>
                <Box ml="3.5rem" w="10.5rem">
                  <ReactStars
                    value={e.rating}
                    count={5}
                    size={30}
                    activeColor="#ffd700"
                    edit={false}
                  />
                </Box>
                <Text fontSize={14} as="b" ml="6rem" mb="1rem" color="teal.400">
                  {e.name}
                </Text>
              </Box>
            </WrapItem>
          ))}
      </Wrap>
    </>
  );
}
export default Opiniones;
