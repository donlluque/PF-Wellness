import React from "react";
import {

    Box,
    Text,
    Wrap,
    WrapItem,
    Center,
    Icon,
    Spacer
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getReviews } from "../../redux/actions";
  import ReactStars from "react-rating-stars-component";
  import {ImQuotesLeft, ImQuotesRight } from "react-icons/im";

function Reviews(){
    const dispatch = useDispatch();
    const { reviews } = useSelector((state) => state);
    


  //-----Estilos para modo oscuro----//

  const bg = useColorModeValue("white", "#2D3748");
  const color = useColorModeValue("black", "white");

  //---------------------------------//

      {reviews && reviews.slice(0,3).map((e) => (
          <WrapItem p={4} borderRadius="0.5rem"
          >
        <Box pt={8} boxShadow="2xl" borderRadius="0.5rem" w="20rem" 
            h="15rem"
        >
        <Icon ml={3} as={ImQuotesLeft} color="teal.600"/>
        <Spacer />
        <Text
        color="teal.600"
        align="center"
          m="1rem"
          fontSize={'15px'}
          pb={4}
          as='cite'>
          {e.review}
        </Text>
        <Spacer />
        <Icon ml={20} as={ImQuotesRight} color="teal.600" />
        <Box ml="4.5rem"  w="10.5rem">
        <ReactStars
                value={e.rating}
                count={5}
                size={40}
                activeColor="#ffd700"
                edit={false}
                />
        </Box>
        
        <Text fontSize={14} as='b' color="teal.400">
          {e.name}
        </Text>
        
      </Box>
      </WrapItem>
      )) }


        </Wrap>

        </>
    );
}
export default Reviews;
