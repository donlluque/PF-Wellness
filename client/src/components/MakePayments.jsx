import {
    Box,
    Center,
    Heading,
    FormLabel,
    Input,
   
    Select,
    FormControl,
    Button
  } from "@chakra-ui/react";
 
  import { useDispatch} from "react-redux";
  import { useState } from "react";
  import {makePayment} from "../redux/actions";



 function MakePayments(){
    const dispatch = useDispatch();
    const [input, setInput] = useState([{
        title: "",
        quantity: 0,
        currency_id: "",
        price: "", 
      }]);
    console.log(input)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(makePayment(input));
      };
    const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });

      };
    return(
        <>
      <Center
        h={{ base: "100vh", sm: "100vh", md: "80vh", lg: "70vh" }}
        bgImage="linear-gradient(
      rgba(230, 255, 250, 0.7),
      rgba(230, 255, 250, 0.7)
    ),
    url(http://nersasl.com/wp-content/uploads/2016/10/pagos-online.jpg)"
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
          Hacé tu pago
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
<Box>
        <FormControl>
        {/* <Select placeholder="Especialidad"  onChange={(e) => {handleChange(e)}}>
                <option value='quiropraxia'>Quiropraxia</option>
                <option value='traumatología'>Traumatología</option>
                </Select> */}
<FormLabel m="1rem">
               Especialidad
              </FormLabel>
              <Input
                name="title"
                value={input.title}
                placeholder="Especialidad"
                onChange={(e) => handleChange(e)}/>

                {/* <Select placeholder='Cantidad' onChange={(e) => {handleChange(e)}}>
              <option value='uno'>1</option>
              </Select> */}
<FormLabel m="1rem">
               Cantidad
              </FormLabel>
              <Input
                name="quantity"
                type="number"
                value={input.quantity}
                placeholder="Cantidad"
                onChange={(e) => handleChange(e)}/>
<FormLabel m="1rem">
               Precio
              </FormLabel>
              <Input
                type="number"
                name="price"
                value={input.price}
                placeholder="precio" 
                onChange={(e) => handleChange(e)}/>
 <FormLabel m="1rem">
               ARS
              </FormLabel>
              <Input
               
                name="currency_id"
                value={input.currency_id}
                placeholder="ARS" 
                onChange={(e) => handleChange(e)}/>

              {/* <Select placeholder="ARS"  onChange={(e) => {handleChange(e)}}>
                <option value='ars'>ARS</option>
                </Select> */}
<Button m="1rem" colorScheme={"teal"} onClick={(e) => handleSubmit(e)}>
  Confirmar pago
</Button>
  </FormControl>
  </Box>
  </>
    )
 
}
export default MakePayments;