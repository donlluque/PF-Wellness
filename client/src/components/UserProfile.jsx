import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";

import FormUserProfile from "./FormUserProfile";
import PatientTurnsPanel from "./patient/turns/PatientTurnsPanel";
import PatientDoctorPanel from "./patient/doctors/PatientDoctorPanel";

function UserProfile() {
  return (
    <>
      <Box bgColor="teal.50">
        <Tabs
          pt={{
            base: "23rem",
            sm: "23rem",
            md: "15rem",
            lg: "15rem",
            xl: "9rem",
          }}
          size="md"
          variant="enclosed"
          colorScheme="teal"
          ml="4rem"
          mr="4rem"
        >
          <TabList>
            <Tab bgColor="white">Datos Personales</Tab>
            <Tab bgColor="white">Mis turnos</Tab>
            <Tab bgColor="white">Doctores</Tab>
            <Tab bgColor="white">Mis pagos</Tab>
          </TabList>

          <TabPanels bgColor="white">
            <TabPanel>
              <FormUserProfile />
            </TabPanel>
            <TabPanel>
              <PatientTurnsPanel />
            </TabPanel>
            <TabPanel>
              <PatientDoctorPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default UserProfile;
