import {
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import FormNewDoctor from "./FormNewDoctor";
import { Button } from "reactstrap";
import { useState } from "react";
import AdminAllDoctors from "./AdminAllDoctors";
import NavStaff from "../NavStaff";

function AdminDoctorPanel() {
  const [newDoctor, setNewDoctor] = useState(false);
  const [listDoctors, setListDoctors] = useState(true);
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
        <Box w={{ xl: "30%" }}>
          <Heading as="h6">Menu</Heading>
          <Divider colorScheme={"teal"} />
          <List m="2rem" spacing={5}>
            <ListItem>
              <Button
                onClick={() => {
                  setListDoctors(true);
                  setNewDoctor(false);
                  setFilter(false);
                }}
              >
                <ListIcon as={BsFillPersonLinesFill} /> Doctores
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => {
                  setNewDoctor(true);
                  setListDoctors(false);
                  setFilter(false);
                }}
              >
                <ListIcon as={GrAdd} /> Nuevo registro
              </Button>
            </ListItem>
            <ListItem>
              <Button
                onClick={() => {
                  setNewDoctor(false);
                  setListDoctors(true);
                  setFilter(true);
                }}
              >
                <ListIcon as={FiFilter} /> Filtrar
              </Button>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "70%" }}>
          {filter && <NavStaff />}
          {newDoctor && <FormNewDoctor />}
          {listDoctors && <AdminAllDoctors />}
        </Box>
      </Box>
    </>
  );
}

export default AdminDoctorPanel;
