import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from "chart.js";
  import { Bar } from "react-chartjs-2";
  import { useEffect, useMemo } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { getDoctors } from "../../redux/actions";
  import { Box } from "@chakra-ui/react";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );

  const options = {
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
    const { doctors } = useSelector((state) => state);
    const labels = ["Julio", "Agosto", "Septiembre"];
  
    useEffect(() => {
      dispatch(getDoctors());
    }, [dispatch]);
  
    const data = useMemo(function () {
        return {
          datasets: [
            {
              label: "Mis datos",
              tension: 0.3,
              data: doctors,
              backgroundColor: [
                "rgb(255, 205, 86)",
                "rgb(75, 192, 192)",
                "rgb(54, 162, 235)"
              ],
            },
          ],
          labels,
        };
      },
      []);
      console.log(data, "SOY DATA MEMO")
    return (
      <>
        {doctors && (
             <Box
             w="50rem"
             p="10rem"
           >
            <Bar data={data} options={options} />
            </Box>
        )}
      </>
    );
  };
  