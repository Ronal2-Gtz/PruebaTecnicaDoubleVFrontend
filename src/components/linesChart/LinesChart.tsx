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
  labels?: Array<string>;
  data?: Array<number>;
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
        borderColor: "#6374FF",
        backgroundColor: "#6374ff59",
        pointRadius: 5,
        pointBorderColor: "#6374FF",
        pointBackgroundColor: "#6374FF",
      },
    ],
  };

  return <Line data={midata} />;
};
