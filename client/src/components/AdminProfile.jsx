import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import FormNewDoctor from "./FormNewDoctor";

function AdminProfile() {
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
            <Tab bgColor="white">Estadisticas</Tab>
            <Tab bgColor="white">Sección Doctor</Tab>
          </TabList>

          <TabPanels bgColor="white">
            <TabPanel>
              <Box w="20rem" h="30rem">
                PROXIMANTE
              </Box>
            </TabPanel>
            <TabPanel>
              <FormNewDoctor />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default AdminProfile;
