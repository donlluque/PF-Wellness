import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import AdminDoctorPanel from "./AdminDoctorPanel";
import AdminPatientPanel from "./AdminPatientPanel";
import AdminTurnos from "./AdminAllTurnos";
import AdminTurnsPanel from "./AdminTurnsPanel";

function AdminProfile() {
  return (
    <>
      <Box bgColor="teal.50">
        <Tabs pt="6rem" size="md" variant="enclosed" ml="4rem" mr="4rem">
          <TabList whiteSpace>
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
