import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import FormUserProfile from "./FormUserProfile";

function UserProfile() {
  return (
    <>
      <Tabs size="md" variant="enclosed" colorScheme="teal">
        <TabList>
          <Tab>Datos Personales</Tab>
          <Tab>Mis turnos</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormUserProfile />
          </TabPanel>
          <TabPanel>
            <Box>No hay turnos reservados</Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
}

export default UserProfile;
