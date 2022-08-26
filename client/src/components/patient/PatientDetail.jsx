import React from "react";
import { cleanDoctor } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";

function PatientDetail() {
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch(getDetailDoctors(id));
    return () => {
      dispatch(cleanDoctor());
    };
  }, [dispatch]);

  const patient = useSelector((state) => state.patientDetail);

  return (
    <Box>
      {patient && patient ? (
        <Box>
          <List spacing={2}>
            <ListItem>
              {" "}
              <Text
                fontSize={"lg"}
                color="#2C7A7B"
                textAlign="center"
                fontFamily={"body"}
              >
                {patient.general_area} - {patient.specialty}
              </Text>
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Matrícula:
              </Text>{" "}
              {}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Prestaciones:
              </Text>{" "}
              <Text display="inline">
                {patient.prepaid_healths?.map((e) => e.name).join(", ")}
              </Text>
            </ListItem>

            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Tel:
              </Text>{" "}
              {patient.phone}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Email:
              </Text>{" "}
              {patient.email}
            </ListItem>
          </List>
        </Box>
      ) : (
        <Text>no se encontró</Text>
      )}
    </Box>
  );
}

export default PatientDetail;
