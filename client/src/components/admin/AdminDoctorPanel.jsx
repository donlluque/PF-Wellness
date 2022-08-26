import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Box,
  List,
  ListItem,
  ListIcon,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { GrAdd } from "react-icons/gr";
import { FiFilter } from "react-icons/fi";
import FormNewDoctor from "./FormNewDoctor";
import { Button } from "reactstrap";
import { useState } from "react";
import AdminAllDoctors from "./AdminAllDoctors";

function AdminDoctorPanel() {
  const [newDoctor, setNewDoctor] = useState(false);
  const [listDoctors, setListDoctors] = useState(true);
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
          <List>
            <ListItem>
              <ListIcon as={GrAdd} />
              <Button
                onClick={() => {
                  setNewDoctor(true);
                  setListDoctors(false);
                }}
              >
                Nuevo registro{" "}
              </Button>
            </ListItem>
            <ListItem>
              <ListIcon as={FiFilter} />
              Filtrar
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <Box w={{ xl: "60%" }}>
          {newDoctor && <FormNewDoctor />}
          {listDoctors && <AdminAllDoctors />}
        </Box>
      </Box>
    </>
  );
}

export default AdminDoctorPanel;
