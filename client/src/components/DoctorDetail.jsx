import React from "react";
import { cleanDoctor, getDetailDoctors, getHours } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";

export default function DoctorDetail({ id }) {
  const dispatch = useDispatch();
  // const { id } = useParams();

  useEffect(() => {
    //dispatch(getDetailDoctors(id));
    return () => {
      dispatch(cleanDoctor());
    };
  }, [dispatch]);

  const doctor = useSelector((state) => state.doctorDetail);
  const totalHours = useSelector((state) => state.hoursWorking);

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
                {doctor.general_area} - {doctor.specialty}
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
              <Text display="inline">
                {doctor.prepaid_healths?.map((e) => e.name).join(", ")}
              </Text>
            </ListItem>
            <ListItem>
              <Text as={"span"} fontWeight={"bold"}>
                Horario de atención:{" "}
              </Text>
              <Text display="inline">
                {doctor.work_days &&
                  doctor.work_days.map((e) => e.day).join(", ")}
              </Text>
              {doctor.hours_json && doctor.hours_json.totalDay ? (
                <Text display="inline">
                  {" "}
                  de{" "}
                  {
                    totalHours.find(
                      (e) => e.id === parseInt(doctor.hours_json.totalDay.start)
                    ).hour
                  }{" "}
                  a{" "}
                  {
                    totalHours.find(
                      (e) => e.id === parseInt(doctor.hours_json.totalDay.end)
                    ).hour
                  }
                </Text>
              ) : doctor.hours_json && doctor.hours_json.notTotalDay ? (
                <Text display="inline">
                  {" "}
                  de{" "}
                  {
                    totalHours.find(
                      (e) =>
                        e.id ===
                        parseInt(doctor.hours_json.notTotalDay.morning.start)
                    ).hour
                  }{" "}
                  a{" "}
                  {
                    totalHours.find(
                      (e) =>
                        e.id ===
                        parseInt(doctor.hours_json.notTotalDay.morning.end)
                    ).hour
                  }{" "}
                  y de{" "}
                  {
                    totalHours.find(
                      (e) =>
                        e.id ===
                        parseInt(doctor.hours_json.notTotalDay.afternoon.start)
                    ).hour
                  }{" "}
                  a{" "}
                  {
                    totalHours.find(
                      (e) =>
                        e.id ===
                        parseInt(doctor.hours_json.notTotalDay.afternoon.end)
                    ).hour
                  }
                </Text>
              ) : (
                false
              )}
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
