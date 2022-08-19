import { Container, Heading, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

function Error() {
  const { pathname } = useLocation();
  return (
    <Box>
      <Heading as="h3" size="lg">
        Error 404: Page not found
      </Heading>
      <Container>
        {`The URL`}{" "}
        <b>{`https://pi-countries-main-iota.vercel.app${pathname}`}</b>{" "}
        {`doesn't exist`}
      </Container>
      <br />
      <br />
    </Box>
  );
}

export default Error;
