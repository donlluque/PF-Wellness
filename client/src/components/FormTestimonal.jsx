import {
    Box,
    Center,
    Heading,
    FormLabel,
    Input,
    Textarea,
    Select,
    FormControl,
    Button
  } from "@chakra-ui/react";
  import ReactStars from "react-rating-stars-component";
  import React from 'react';
  import {Context} from "./Context";
  import { useState } from "react";
  import { getDoctors } from "../redux/actions";
  import { useDispatch, useSelector } from "react-redux";
  import { useEffect} from "react";
  import { Link } from "react-router-dom";


 function MakeReviews(){
    const {mostrar, setMostrar} = React.useContext(Context);
    const dispatch = useDispatch();
    const { doctors } = useSelector( (state) => state);
    setMostrar(false);

    useEffect ( () =>{
        dispatch(getDoctors())

    }, [])
    
    const [input, setInput] = useState([{
        name: "",
        review: "", 
        doctors: "All",
        rating: 1
      }]);
   console.log(input, "SOY EL INPUT")

   const [rating, setRating] = useState(0);
    const handleSubmit = async (e) => {
      e.preventDefault();
   
    }
    const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

    };

    const ratingChanged = (newRating) => {
        console.log(newRating);
        setInput({...input, rating: newRating})
      };
    return(
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
          Nos interesa conocer tu experiencia
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
      
<Box maxW='sm' borderWidth="1px" borderRadius="0.5rem" ml='30rem' p="1rem" mb="2rem" boxShadow="2xl">
        <FormControl>
 <FormLabel m="1rem">
               Nombre
              </FormLabel>
              <Input
                name="name"
                value={input.name}
                placeholder="Tu nombre"
                onChange={(e) => handleChange(e)}/> 

                
           <FormLabel m="1rem">
               Tu experiencia en Wellness
              </FormLabel>
              <Textarea 
                name="review"
                type="text"
                value={input.review}
                placeholder="Tu experiencia"
                onChange={(e) => handleChange(e)}/>
             <Select mt="1rem"
                value={input.doctors}
                onChange={(e) => handleChange(e)}
                name="doctors"
              >
                <option value="All">Profesional que te atendió</option>
                {doctors &&
                  doctors.map((e) => (
                    <option value={e.name}>{e.name}</option>
                  ))}
              </Select>
              {/* <Rating name="half-rating" defaultValue={2.5} value={input.rating} precision={0.5} /> */}
              <Box ml="5.5rem" mt="1rem">
              <ReactStars
                
                value={rating}
                
                count={5}
                onChange={ratingChanged}
                size={40}
                activeColor="#ffd700"
                />
                </Box>
<Link to="/">
<Button m="1rem" ml="7.5rem" mt="2rem" colorScheme={"teal"} onClick={(e) => handleSubmit(e)}>
  Confirmar
</Button>
</Link>
  </FormControl>
  </Box>
  
  </>
    )
 
}
export default MakeReviews;