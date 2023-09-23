import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJs,
  Title,
  ArcElement,
  Legend,
  ChartConfiguration,
} from "chart.js";
ChartJs.register(Title, ArcElement, Legend);

interface DoughnutChartProps {
  data: number[];
  labels: string[];
  percentages: number[];
  colors: string[];
}

const DoughnutChart: React.FC<DoughnutChartProps> = ({
  data,
  labels,
  percentages,
  colors,
}) => {
  const chartData = {
    datasets: [
      {
        data,
        backgroundColor: colors,
        borderColor: "white",
        borderWidth: 2,
        borderRaduis: 12,
      },
    ],
    labels,
  };

  const chartOptions: ChartConfiguration["options"] = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <div className="relative  flex justify-between items-center px-2 space-x-1 ">
      <div className="" style={{ width: "80px", height: "80px" }}>
        <Doughnut data={chartData} options={chartOptions} />
      </div>
      <div className="flex flex-col justify-center items-center">
        {labels.map((label, index) => (
          <div
            key={index}
            className="flex items-center justify-between w-[100px] "
          >
            <div
              className="w-2 h-2 rounded-full "
              style={{ backgroundColor: colors[index] }}
            ></div>
            <span className="text-[8px]">{label}</span>
            <br />
            <span className="text-[8px] px-3">{percentages[index]}%</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoughnutChart;
