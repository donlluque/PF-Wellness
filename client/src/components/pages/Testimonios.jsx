import React from 'react';
import {
    Box,
    Text,
    Flex,
    Wrap,
    WrapItem
  } from "@chakra-ui/react";
  import { useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getReviews } from "../../redux/actions";
  import ReactStars from "react-rating-stars-component";

function Reviews(){
    const dispatch = useDispatch();
    const { reviews } = useSelector((state) => state);


    useEffect(() => {
      dispatch(getReviews());

    }, [dispatch]);
    return(
        <>
        <Wrap>

      {reviews && reviews.map((e) => (
          <WrapItem p={4} borderRadius="0.5rem"
        //   justify="center"
        //   boxShadow={'lg'}
        //   maxW={'640px'}
        //   width={'full'}
        //   rounded={'xl'}
        //   p={10}
        //   justifyContent={'space-between'}
        //   position={'relative'}
          >
        <Box p={3} boxShadow="2xl" borderRadius="0.5rem" w="15rem" 
            h="10rem"
        // direction={'column'}
        // justifyContent={'space-between'}
        >
        <Text
          m="1rem"
          fontSize={'15px'}
          pb={4}
          as='cite'>
          {e.review}
        </Text>
        <Box ml="1rem" mr="1rem" >
        <ReactStars
                value={e.rating}
                count={5}
                size={40}
                activeColor="#ffd700"
                edit={false}
                />
        </Box>
        <Text fontSize={14} as='b'>
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