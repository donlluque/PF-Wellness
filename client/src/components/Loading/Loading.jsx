import React from "react";
import { Image, Box } from "@chakra-ui/react";
const Loading = () => {
  return (
    <Box
      display={{ md: "flex" }}
      justifyContent="center"
      h="35rem"
      alignItems="center"
    >
      <Image
        src={"https://www.jumala.com.ar/images/loading.gif"}
        w="20rem"
        h="20rem"
      />
    </Box>
  );
};

export default Loading;
