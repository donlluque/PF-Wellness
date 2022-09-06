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
  import { getStats, getAllPatients, getDoctors } from "../../redux/actions";
  import { Box, Stat,StatLabel,StatNumber } from "@chakra-ui/react";

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
      y: {
        beginAtZero: true
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Cantidad de Doctores por Área",
      },
    },
  };

  const options2 = {
    fill: true,
    scales: {
      y: {
        min: 0,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Cantidad de pacientes",
      },
    },
  };
  
  export default function Chart (){

    const dispatch = useDispatch();
    const { stats, patients, doctors } = useSelector((state) => state);
    const labels = ["Deportología", "Fisioterapia y Kinesiología", "Osteopatía", "Quiropraxia","Reumatología", "Terapia de Dolor", "Traumatología"];
   
    const stats2 = stats.doctorsCount;
    const stats3 = stats.patientsCount;
    console.log(stats2, "stats33")
  
    useEffect(() => {
      dispatch(getStats());
    }, [dispatch]);
  
    const data = useMemo(function () {
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
            },
          ],
          labels:["Deportología", "Fisioterapia y Kinesiología", "Osteopatía", "Quiropraxia","Reumatología", "Terapia de Dolor", "Traumatología"] ,
        };
      },
      [stats2]);

      const data2 = useMemo(function () {
        return {
          labels: ["Asociados Wellness", "No Asociados"],
          datasets: [
            {
              label: "Cantidad",
              tension: 0.3,
              data: stats3,
              backgroundColor: [
                "rgb(212, 172, 13)",
                "rgb(75, 192, 192)",
              ],
            },
          ],
         
        };
      },
      [stats3]);

    return (
      <>
      <Box>
        {stats2 && ( 
            <>
            <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            boxSize="45rem"
            pt="3rem"
            w="73rem"
            h="20rem"
            mt="3rem"
            boxShadow="dark-lg"
            borderRadius="0.5rem"
            border="solid 1px"
            borderColor="grey">
            <Box boxSize="30rem">
             <Bar data={data} options={options} />
            </Box>
            <Box boxSize={"20rem"}>
            <Stat size={"md"} >
              <StatLabel fontSize={"2rem"}>Cantidad Total de Profesionales</StatLabel>
              <StatNumber fontSize={"4rem"}>{doctors.length}</StatNumber>
            </Stat>
            </Box>
            </Box>
            </>
        )}
        {stats3 && ( 
            <>
            <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-around"
            boxSize="45rem"
            pt="3rem"
            w="73rem"
            h="25rem"
            mt="3rem"
            boxShadow="dark-lg"
            borderRadius="0.5rem"
            border="solid 1px"
            borderColor="grey">
            
            <Box boxSize={"25rem"}>
            <Stat size={"md"} >
              <StatLabel fontSize={"2rem"}>Cantidad Total de Pacientes</StatLabel>
              <StatNumber fontSize={"4rem"}>{patients.length}</StatNumber>
            </Stat>
            </Box>
            <Box boxSize="20rem">
            <Pie data={data2} options={options2}/>
            </Box>
            </Box>
            </>
        )}
        
          </Box>
      </>
    );
  };
  