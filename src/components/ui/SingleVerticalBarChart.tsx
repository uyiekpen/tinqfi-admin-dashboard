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

interface BarChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
  }[];
  title: string;
}

const BarChart: React.FC<BarChartProps> = ({ labels, datasets, title }) => {
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
    <div className="w-fit  ">
      <Bar
        options={options}
        data={chartData}
        style={{ height: "100%", width: "100%" }}
      />
      ;
    </div>
  );
};

export default BarChart;
