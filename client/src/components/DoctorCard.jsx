import React from "react";
//import { Link } from "react-router-dom";
import { useDisclosure, WrapItem } from "@chakra-ui/react";
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   Button,
   Box,
   Wrap,
   Image,
   Text,
   List,
   ListItem
 } from '@chakra-ui/react'
import DoctorDetail from "./DoctorDetail";



 export default function DoctorCard({id, picture, name, general_area, especialidades_id}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    

 return(
        <Wrap >
         <WrapItem >
          <Box
            
            m="3rem"
            border="1px solid gray"
            w="20rem"
            h="20rem"
            p="1rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
            boxShadow="2xl"
            borderRadius="1rem"
            >
              <Image src={picture} alt="img not found" maxW="10rem" mb="1rem" borderRadius='5%'/>
             <List spacing={3}>
                <ListItem fontSize='2xl'>{name}</ListItem>
              
                <ListItem ml='7' color='gray.500'>{general_area} - {especialidades_id}</ListItem>
                
                <Button mt='5' ml='7' onClick={onOpen}>LEER MAS</Button>
             </List>
          </Box>
          </WrapItem>
<>
       
 
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
           <ModalHeader> {name}</ModalHeader>
            {/* <ModalCloseButton /> */}
             <ModalBody>
              {/* <Lorem count={2} /> */}
              <DoctorDetail id={id}/>
            </ModalBody> 
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              
            </ModalFooter> 
          </ModalContent>
        </Modal>
      </>

       </Wrap>
     )
 }