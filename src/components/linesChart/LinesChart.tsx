import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

type LinesChartProps = {
  labels: Array<string>;
  data: Array<number>;
};

export const LinesChart = ({ labels, data }: LinesChartProps) => {

    console.log({labels, data})

  const midata = {
    labels,
    datasets: [
      {
        label: "Usuarios",
        data,
        tension: 0.5,
        fill: true,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        pointRadius: 5,
        pointBorderColor: "rgba(255, 99, 132)",
        pointBackgroundColor: "rgba(255, 99, 132)",
      },
    ],
  };

  return <Line data={midata} />;
};
