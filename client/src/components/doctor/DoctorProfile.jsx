import { Tabs, TabList, TabPanels, Tab, TabPanel, Box } from "@chakra-ui/react";
import DoctorTurnsPanel from "./turns/DoctorTurnsPanel";
import DoctorPatientPanel from "./patient/DoctorPatientPanel";
import DoctorAbsentPanel from "./absent/DoctorAbsentPanel";
import FormPutDoctor from "../admin/doctors/FormPutDoctor";

function DoctorProfile() {
  return (
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
        ml="4rem"
        mr="4rem"
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
            Datos personales
          </Tab>
          <Tab
            bgColor="white"
            mr="0.3rem"
            _selected={{ color: "white", bg: "teal.500" }}
          >
            Turnos
          </Tab>
          <Tab
            bgColor="white"
            mr="0.3rem"
            _selected={{ color: "white", bg: "teal.500" }}
          >
            Pacientes
          </Tab>
          <Tab
            bgColor="white"
            mr="0.3rem"
            _selected={{ color: "white", bg: "teal.500" }}
          >
            Ausencias
          </Tab>
        </TabList>

        <TabPanels bgColor="white">
          <TabPanel>
            <FormPutDoctor />
          </TabPanel>
          <TabPanel>
            <DoctorTurnsPanel />
          </TabPanel>
          <TabPanel>
            <DoctorPatientPanel />
          </TabPanel>
          <TabPanel>
            <DoctorAbsentPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}

export default DoctorProfile;
