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
/*
  {
        "id": 2,
        "date": "11/9/22",
        "history_id": null,
        "doctors": [
            {
                "id": 1,
                "name": "Pepix",
                "medic_id": "Aguante la mona",
                "specialty": "Miembro Superior",
                "activo": true,
                "phone": "03547454634",
                "email": "cuelloagustin3@gmail.com",
                "birthday": "2022-08-31",
                "document": 4444444,
                "type_document": "DNI",
                "picture": null,
                "hours_json": {
                    "totalDay": {
                        "start": "18",
                        "end": "19"
                    }
                },
                "areaId": 5,
                "Doctor_Dates1": {
                    "dates1Id": 2,
                    "doctorId": 1
                },
                "prepaid_healths": [
                    {
                        "id": 1,
                        "name": "Osde",
                        "address": "contacto@osde.com.ar",
                        "phone": "0810-5556733",
                        "logo": "http://www.elsindical.com.ar/notas/var/www/html/notas/wp-content/uploads/2017/01/Logo-OSDE.jpg",
                        "percentage": 0.4,
                        "Doctor_Prepaid_Health": {
                            "doctorId": 1,
                            "prepaidHealthId": 1
                        }
                    },
                    {
                        "id": 3,
                        "name": "Galeno",
                        "address": "consultas@galeno.com.ar",
                        "phone": "0810-333-4253",
                        "logo": "https://www.mi-prepaga.com.ar/wp-content/uploads/2019/01/Galeno-768x334.jpg",
                        "percentage": 0.35,
                        "Doctor_Prepaid_Health": {
                            "doctorId": 1,
                            "prepaidHealthId": 3
                        }
                    },
                    {
                        "id": 5,
                        "name": "Parque Salud",
                        "address": "comercial@parquesalud.com.ar",
                        "phone": "(0351) 568 3000",
                        "logo": "http://www.estudionayi.com.ar/imagenes_misaplicaciones/WG4_17984___WG4_17984___parque.png",
                        "percentage": 0.15,
                        "Doctor_Prepaid_Health": {
                            "doctorId": 1,
                            "prepaidHealthId": 5
                        }
                    }
                ],
                "work_days": [
                    {
                        "id": 2,
                        "day": "Martes",
                        "Doctor_Work_Days": {
                            "doctorId": 1,
                            "workDayId": 2
                        }
                    },
                    {
                        "id": 4,
                        "day": "Jueves",
                        "Doctor_Work_Days": {
                            "doctorId": 1,
                            "workDayId": 4
                        }
                    },
                    {
                        "id": 5,
                        "day": "Viernes",
                        "Doctor_Work_Days": {
                            "doctorId": 1,
                            "workDayId": 5
                        }
                    }
                ]
            }
        ],
        "hours_workings": [
            {
                "hour": "09:00",
                "Hours_Working_Dates1": {
                    "dates1Id": 2,
                    "hoursWorkingId": 3
                }
            }
        ],
        "patients": [
            {
                "fullName": "Jhon Vasquez",
                "id": 3,
                "name": "Jhon",
                "last_name": "Vasquez",
                "user_name": "jhonba2020",
                "document": "1004356",
                "type_document": null,
                "email": "jhonba2020@gmail.com",
                "phone": "3015037315",
                "nationality": null,
                "direction": null,
                "birthday": null,
                "medical_history": null,
                "picture": "https://lh3.googleusercontent.com/a/AItbvmnFjnM8Uw1GAlJd99KwtM4G4R7O95TLaWX2uVSO=s96-c",
                "Patient_Dates1": {
                    "dates1Id": 2,
                    "patientId": 3
                },
                "prepaid_healths": [
                    {
                        "id": 3,
                        "name": "Galeno",
                        "address": "consultas@galeno.com.ar",
                        "phone": "0810-333-4253",
                        "logo": "https://www.mi-prepaga.com.ar/wp-content/uploads/2019/01/Galeno-768x334.jpg",
                        "percentage": 0.35,
                        "Patient_Prepaid_Health": {
                            "patientId": 3,
                            "prepaidHealthId": 3
                        }
                    }
                ]
            }
        ]
    }
    */
