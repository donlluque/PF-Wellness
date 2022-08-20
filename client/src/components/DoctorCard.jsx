import React from "react";
//import { Link } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";
import {
   Modal,
   ModalOverlay,
   ModalContent,
   ModalHeader,
   ModalFooter,
   ModalBody,
   Button,
 } from '@chakra-ui/react'
import DoctorDetail from "./DoctorDetail";



 export default function DoctorCard({id, picture, name, general_area}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    

 return(
        <div >

          <div>
             <div>
              <img src={picture} alt="img not found" width="200px" height="250px"/>
             </div>
            <div>
               <h3>{name}</h3>
             </div>
             <div>
                <h4>{general_area}</h4>
             </div>
          </div>
<>
       <Button onClick={onOpen}>LEER MAS</Button>
 
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

       </div>
     )
 }