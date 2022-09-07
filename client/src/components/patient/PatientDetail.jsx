import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  Box,
  Text,
  List,
  ListItem,
  Image,
  Center,
  CircularProgress,
} from "@chakra-ui/react";

function PatientDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getDetailDoctors(id));
    return () => {
      //dispatch(cleanDoctor());
    };
  }, [dispatch]);

  const patient = useSelector((state) => state.patientDetail);

  return (
    <Box>
      {patient.id ? (
        patient && patient ? (
          <Box>
            <List spacing={2} m="1rem">
              <ListItem
                display="flex"
                justifyContent={"space-around"}
                mb="1rem"
              >
                <Image src={patient.picture} w="5rem" rounded={"50%"} />
                <Text
                  fontSize={"2xl"}
                  fontWeight="bold"
                  color="#2C7A7B"
                  textAlign="center"
                >
                  {patient.name} {patient.last_name}
                </Text>
              </ListItem>
              {patient.document ? (
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    DNI:
                  </Text>{" "}
                  {patient.document}
                </ListItem>
              ) : (
                false
              )}
              {patient.birthday ? (
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Fecha de nacimiento:
                  </Text>{" "}
                  {patient.birthday?.split("-").reverse().join("/")}
                </ListItem>
              ) : (
                false
              )}
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Email:
                </Text>{" "}
                {patient.email}
              </ListItem>
              <ListItem>
                <Text as={"span"} fontWeight={"bold"}>
                  Usuario Wellness:
                </Text>{" "}
                {patient.user_name}
              </ListItem>
              {patient.phone ? (
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Tel:
                  </Text>{" "}
                  {patient.phone}
                </ListItem>
              ) : (
                false
              )}
              {patient.prepaid_healths.length ? (
                <ListItem>
                  <Text as={"span"} fontWeight={"bold"}>
                    Obra Social:
                  </Text>{" "}
                  <Text display="inline">
                    {patient.prepaid_healths?.map((e) => e.name).join(", ")}
                  </Text>
                </ListItem>
              ) : (
                false
              )}
            </List>
          </Box>
        ) : (
          <Text>No se encontró</Text>
        )
      ) : (
        <Center m="8rem">
          <CircularProgress isIndeterminate color="teal.500" size="100px" />
        </Center>
      )}
    </Box>
  );
}

export default PatientDetail;
