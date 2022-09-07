import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  CircularProgress,
  Center,
} from "@chakra-ui/react";

import FormUserProfile from "./FormUserProfile";
import PatientTurnsPanel from "./turns/PatientTurnsPanel";
import PatientDoctorPanel from "./doctors/PatientDoctorPanel";

function UserProfile() {
  return (
    <>
      <Box bgColor="teal.50" minW="100vh">
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
          ml={{
            base: "2.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "4rem",
            xl: "4rem",
          }}
          mr={{
            base: "2.5rem",
            sm: "2.5rem",
            md: "3rem",
            lg: "4rem",
            xl: "4rem",
          }}
        >
          <TabList
            whiteSpace
            display={"flex"}
            flexDirection={{
              base: "column",
              sm: "column",
              md: "row",
              lg: "row",
            }}
          >
            <Tab
              _selected={{ color: "white", bg: "teal.500" }}
              bgColor="white"
              mr="0.3rem"
            >
              Datos Personales
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "teal.500" }}
              bgColor="white"
              mr="0.3rem"
            >
              Mis turnos
            </Tab>
            <Tab
              _selected={{ color: "white", bg: "teal.500" }}
              bgColor="white"
              mr="0.3rem"
            >
              Doctores
            </Tab>
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
