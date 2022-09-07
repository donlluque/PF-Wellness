import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Bar, Pie } from "react-chartjs-2";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStats } from "../../redux/actions";
import {
  Box,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Heading,
  CircularProgress,
  Center,
} from "@chakra-ui/react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  fill: true,
  scales: {
    x: {
      beginAtZero: true,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,

      text: "Doctores por Área",
    },
  },
};

const options2 = {
  fill: true,
  hoverOffset: 4,
  scales: {
    y: {
      display: false,
    },
  },

  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: true,
      text: "Distribución de pacientes segun prestación",
    },
  },
};

export default function Chart() {
  const dispatch = useDispatch();
  const { stats, patients, doctors } = useSelector((state) => state);

  let months = [
    "Ene",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const stats2 = stats.doctorsCount;
  const stats3 = stats.patientsCount;
  console.log(stats2, "stats33");

  useEffect(() => {
    dispatch(getStats());
  }, [dispatch]);

  const data = useMemo(
    function () {
      return {
        datasets: [
          {
            label: "Cantidad",
            tension: 0.3,
            data: stats2,
            backgroundColor: [
              "rgb(239, 154, 154)",
              "rgb(159, 168, 218 )",
              "rgb(128, 222, 234 )",
              "rgb(165, 214, 167 )",
              "rgb(255, 241, 118 )",
              "rgb(255, 171, 145 )",
              "rgb(128, 203, 196 )",
            ],
            borderWidth: 1,
          },
        ],
        labels: [
          "Deportología",
          "Fisioterapia y Kinesiología",
          "Osteopatía",
          "Quiropraxia",
          "Reumatología",
          "Terapia de Dolor",
          "Traumatología",
        ],
        options: { scales: { x: { beginAtZero: true } } },
      };
    },
    [stats2]
  );

  const data2 = useMemo(
    function () {
      return {
        labels: ["Asociados Wellness", "No Asociados"],
        datasets: [
          {
            label: "Cantidad",
            tension: 0.3,
            data: stats3,
            backgroundColor: ["rgb(212, 172, 13)", "rgb(75, 192, 192)"],
          },
        ],
      };
    },
    [stats3]
  );

  return (
    <>
      {patients.length && doctors.length ? (
        <Box display="flex" flexDirection={"column"} alignItems="center">
          {stats2 && (
            <>
              <Heading as="h2" textAlign={"center"} m="1rem" p="1rem">
                PROFESIONALES
              </Heading>
              <Box
                display="flex"
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                }}
                justifyContent={"space-evenly"}
                alignItems="center"
                border="1px solid gray"
                boxShadow={"2xl"}
                borderRadius="0.5rem"
                w={{ base: "100%", lg: "90%" }}
              >
                <Box p={{ base: 0, sm: "1rem" }} w={{ base: "100%" }}>
                  <Bar data={data} options={options} m="1rem" />
                </Box>
                <Box m="1rem">
                  <Stat
                    w="18rem"
                    h="12rem"
                    display="flex"
                    borderRadius={"0.5rem"}
                    justifyContent={"center"}
                    p="1rem"
                  >
                    <StatLabel textAlign={"center"} fontSize="xl">
                      Cantidad total
                    </StatLabel>
                    <StatNumber textAlign={"center"} fontSize="6xl">
                      {doctors.length}
                    </StatNumber>
                    <StatHelpText>
                      Ago 2022 - {months[new Date().getMonth()]}{" "}
                      {new Date().getFullYear()}
                    </StatHelpText>
                  </Stat>
                </Box>
              </Box>
            </>
          )}
          {stats3 && (
            <>
              <Heading as="h2" textAlign={"center"} m="1rem" p="1rem">
                PACIENTES
              </Heading>
              <Box
                display="flex"
                flexDirection={{
                  base: "column",
                  sm: "column",
                  md: "column",
                  lg: "row",
                }}
                justifyContent={"space-evenly"}
                alignItems="center"
                border="1px solid gray"
                boxShadow={"2xl"}
                borderRadius="0.5rem"
                w="90%"
              >
                <Box m="1rem">
                  <Stat
                    h="12rem"
                    w="18rem"
                    display="flex"
                    borderRadius={"0.5rem"}
                    justifyContent={"center"}
                    p="1rem"
                  >
                    <StatLabel textAlign={"center"} fontSize="xl">
                      Cantidad total
                    </StatLabel>
                    <StatNumber textAlign={"center"} fontSize="6xl">
                      {patients.length}
                    </StatNumber>
                    <StatHelpText>
                      Ago 2022 - {months[new Date().getMonth()]}{" "}
                      {new Date().getFullYear()}
                    </StatHelpText>
                  </Stat>
                </Box>

                <Box p="1rem">
                  <Pie data={data2} options={options2} />
                </Box>
              </Box>
            </>
          )}
        </Box>
      ) : (
        <Center m="8rem">
          <CircularProgress isIndeterminate color="teal.500" size="100px" />
        </Center>
      )}
    </>
  );
}
