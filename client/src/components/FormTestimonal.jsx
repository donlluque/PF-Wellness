import {
  Box,
  Center,
  Heading,
  FormLabel,
  Input,
  Textarea,
  Select,
  FormControl,
  Button,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import ReactStars from "react-rating-stars-component";
import React from "react";
import { Context } from "./Context";
import { useState } from "react";
import { getDoctors } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { addReview } from "../redux/actions";

function MakeReviews() {
  const { mostrar, setMostrar } = React.useContext(Context);
  const dispatch = useDispatch();
  const history = useHistory();
  const { doctors } = useSelector((state) => state);
  setMostrar(false);

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  const [input, setInput] = useState([
    {
      name: "",
      review: "",
      doctors: "All",
      rating: 0,
    },
  ]);
  const [errors, setErrors] = useState({ flag: true });

  function validations(input) {
    let error = {};

    if (!input.name) {
      error.name = "Necesitas completar con tu nombre";
    }
    console.log(error.name);
    if (!input.review) {
      error.review = "Completa este campo";
    }
    return error;
  }

  const [rating, setRating] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!errors.name) {
      dispatch(addReview(input));
    }
    history.push("/");
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setInput({ ...input, rating: newRating });
  };
  return (
    <>
      <Center
        h={{ base: "100vh", sm: "100vh", md: "80vh", lg: "70vh" }}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.7),
      rgba(230, 255, 250, 0.7)
    ),
    url(https://cdn.pixabay.com/photo/2019/10/27/15/49/assist-4582129_960_720.jpg)"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Heading
          textAlign="center"
          as="h1"
          fontSize={{ base: "4xl", sm: "4xl", md: "5xl", lg: "5xl" }}
          m="1rem"
          mt={{ base: "10rem", sm: "10rem", md: "8rem", lg: "5rem" }}
        >
          Tu opinión nos importa
        </Heading>
      </Center>
      <Box
        pt={"1.5rem"}
        display="flex"
        // flexDirection={{
        //   base: "column",
        //   sm: "column",
        //   md: "column",
        //   lg: "row",
        // }}
        justifyContent={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "space-around",
        }}
        alignItems={{
          base: "center",
          sm: "center",
          md: "center",
          lg: "flex-start",
        }}
      ></Box>

      <Box
        maxW="sm"
        borderWidth="1px"
        borderRadius="0.5rem"
        ml="30rem"
        p="1rem"
        mb="2rem"
        boxShadow="2xl"
      >
        <FormControl>
          <FormControl isInvalid={errors.name}>
            <FormLabel m="1rem">Nombre</FormLabel>
            <Input
              name="name"
              value={input.name}
              placeholder="Tu nombre"
              onChange={(e) => handleChange(e)}
            />
            {errors.name && <FormErrorMessage>{errors.name} </FormErrorMessage>}
          </FormControl>
          <FormControl isInvalid={errors.review}>
            <FormLabel m="1rem">Tu experiencia en Wellness</FormLabel>
            <Textarea
              maxlength="80"
              name="review"
              type="text"
              value={input.review}
              placeholder="Tu experiencia"
              onChange={(e) => handleChange(e)}
            />
            {errors.review && (
              <FormErrorMessage>{errors.review} </FormErrorMessage>
            )}
          </FormControl>

          <Select
            mt="1rem"
            value={input.doctors}
            onChange={(e) => handleChange(e)}
            name="doctors"
          >
            <option value="All">Profesional que te atendió</option>
            {doctors &&
              doctors.map((e) => <option value={e.id}>{e.name}</option>)}
          </Select>
          {/* <Rating name="half-rating" defaultValue={2.5} value={input.rating} precision={0.5} /> */}
          <Box ml="5.5rem" mt="1rem">
            <ReactStars
              value={rating || 1}
              count={5}
              onChange={ratingChanged}
              size={40}
              activeColor="#ffd700"
            />
          </Box>
          <Link to="/">
            <Button
              m="1rem"
              ml="7.5rem"
              mt="2rem"
              colorScheme={"teal"}
              onClick={(e) => handleSubmit(e)}
              disabled={Object.keys(errors).length}
            >
              Confirmar
            </Button>
          </Link>
        </FormControl>
      </Box>
    </>
  );
}
export default MakeReviews;
