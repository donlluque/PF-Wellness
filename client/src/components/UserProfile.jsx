import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

import FormUserProfile from "./FormUserProfile";

function UserProfile() {
  return (
    <>
      <Box bgColor="teal.50">
        <Tabs
          pt="6rem"
          size="md"
          variant="enclosed"
          colorScheme="teal"
          ml="4rem"
          mr="4rem"
        >
          <TabList>
            <Tab bgColor="white">Datos Personales</Tab>
            <Tab bgColor="white">Mis turnos</Tab>
          </TabList>

          <TabPanels bgColor="white">
            <TabPanel>
              <FormUserProfile />
            </TabPanel>
            <TabPanel>
              <Box w='20rem' h='30rem'>No hay turnos reservados</Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default UserProfile;
