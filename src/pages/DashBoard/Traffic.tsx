import React from "react";
import { PieChart, SingleVerticalBarChart } from "../../components/ui";
import LineChart from "../../components/ui/LineChart";

const Revenue = () => {
  const data1 = [30.8, 38.6, 22.5, 8.1]; // Dummy data set 1
  const labels1 = ["#1C1C1C", "#BAEDBD", "#B1E3FF", "#95A4FC"];
  const percentage = [30.8, 38.6, 22.5, 8.1];
  const label = ["mexico", "nigeria", "canada", "other"];

  const datasets = [
    {
      label: "Dataset 1",
      data: [55, 50, 70, 75, 50, 50, 30, 60, 80, 50, 35, 65],
      backgroundColor: "#1C1C1C",
      barThickness: 0.2,
      barPercentage: 1.0,
    },
  ];
  const labels = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];

  return (
    <div className="flex justify-evenly space-x-3 ">
      <div className="flex justify-center flex-col bg-white rounded-md  w-[200px] h-[250px] ">
        <div className="p-4 text-sm">Traffic by Location</div>
        <PieChart
          colors={labels1}
          data={data1}
          labels={label}
          percentages={percentage}
        />
      </div>
      <div className="flex justify-center flex-col bg-white rounded-md  w-[300px] h-[250px] p-2">
        <div className="p-4 text-sm">Traffic by Device</div>{" "}
        <SingleVerticalBarChart
          labels={labels}
          datasets={datasets}
          title={""}
        />
      </div>
      <div className="flex justify-center flex-col bg-white rounded-md  w-[180px] h-[250px] p-2">
        <div className="p-4 text-sm">Traffic by Website</div>
        <div>
          <LineChart />
        </div>
      </div>{" "}
    </div>
  );
};

export default Revenue;
