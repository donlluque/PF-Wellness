import React from "react";
import { getDetail, cleanDoctor, getDetailDoctors } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";

export default function DoctorDetail({ id }) {
  const dispatch = useDispatch();
  // const { id } = useParams();

  useEffect(() => {
    dispatch(getDetailDoctors(id));
    return () => {
      dispatch(cleanDoctor());
    };
  }, [dispatch]);

  const doctor = useSelector((state) => state.doctorDetail);
  // console.log("soy doctor",doctor);
  return (
    <Box>
      {doctor && doctor ? (
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
                {doctor.general_area} - {doctor.especialidades_id}
              </Text>
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Matrícula:
              </Text>{" "}
              {doctor.medic_id}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Prestaciones:
              </Text>{" "}
              {doctor.prepaid_health?.join(", ")}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Horario de atención:
              </Text>{" "}
              {doctor.description}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Tel:
              </Text>{" "}
              {doctor.phone}
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Email:
              </Text>{" "}
              {doctor.email}
            </ListItem>
          </List>
        </Box>
      ) : (
        <Text>no se encontró</Text>
      )}
    </Box>
  );
}
