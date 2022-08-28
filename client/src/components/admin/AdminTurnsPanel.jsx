import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Button } from "reactstrap";

import { AiOutlineSearch } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";

import AdminAllTurnos from "./AdminAllTurnos";

function AdminTurnsPanel() {
  const [listTurns, setListTurns] = useState(true);
  const [filter, setFilter] = useState(false);
  return (
    <>
      <Box
        display={"flex"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
        justifyContent="space-around"
      >
        <Box w={{ xl: "25%" }}>
          <Heading as="h6">Menu</Heading>
          <Divider colorScheme={"teal"} />
          <List m="2rem" spacing={5}>
            <ListItem>
              <Button
                onClick={() => {
                  setListTurns(true);
                  setFilter(false);
                }}
              >
                <ListIcon as={BsFillPersonLinesFill} /> Turnos
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => {
                  setListTurns(true);
                  setFilter(true);
                }}
              >
                <ListIcon as={AiOutlineSearch} /> Buscar
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "75%" }}>
          {filter && <Text>PROXIMAMENTE</Text>}

          {listTurns && <AdminAllTurnos />}
        </Box>
      </Box>
    </>
  );
}

export default AdminTurnsPanel;
