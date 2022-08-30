import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import AdminDoctorPanel from "./doctors/AdminDoctorPanel";
import AdminPatientPanel from "./patients/AdminPatientPanel";
import AdminTurnsPanel from "./turns/AdminTurnsPanel";

function AdminProfile() {
  return (
    <>
      <Box bgColor="teal.50" w="100vw">
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
          ml={{
            base: "1.5rem",
            sm: "1.5rem",
            md: "3rem",
            lg: "4rem",
            xl: "4rem",
          }}
          mr={{
            base: "1.5rem",
            sm: "1.5rem",
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
              Estadisticas
            </Tab>
            <Tab
              bgColor="white"
              mr="0.3rem"
              _selected={{ color: "white", bg: "teal.500" }}
            >
              Sección Doctor
            </Tab>
            <Tab
              bgColor="white"
              mr="0.3rem"
              _selected={{ color: "white", bg: "teal.500" }}
            >
              Sección Paciente
            </Tab>
            <Tab
              bgColor="white"
              mr="0.3rem"
              _selected={{ color: "white", bg: "teal.500" }}
            >
              Turnos
            </Tab>
          </TabList>

          <TabPanels bgColor="white">
            <TabPanel>
              <Box w="20rem" h="30rem">
                PROXIMANTE
              </Box>
            </TabPanel>
            <TabPanel>
              <AdminDoctorPanel />
            </TabPanel>
            <TabPanel>
              <AdminPatientPanel />
            </TabPanel>
            <TabPanel>
              <AdminTurnsPanel />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
}

export default AdminProfile;
