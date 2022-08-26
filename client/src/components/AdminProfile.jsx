import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import AdminTurnos from "./AdminTurnos";
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
            <Tab bgColor="white">Turnos</Tab>
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
            <TabPanel>
              <AdminTurnos />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default AdminProfile;
