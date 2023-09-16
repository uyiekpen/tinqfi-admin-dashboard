import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface DoubleBarChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
  title: string;
}

const DoubleBarChart: React.FC<DoubleBarChartProps> = ({
  labels,
  datasets,
  title,
}) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        labels: {
          boxWidth: 10, // Set box width to 0 to hide legend labels
          boxHeight: 0, // Set box height to 0 to hide legend labels
          fontSize: 8,
        },
      },
      title: {
        display: false,
        text: title,
      },
      scales: {
        x: {
          categoryPercentage: 0.6,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets,
  };

  return (
    <div className="w-fit h-[200px] ">
      <Bar
        options={options}
        data={chartData}
        style={{ height: "200px", width: "" }}
      />
      ;
    </div>
  );
};

export default DoubleBarChart;
