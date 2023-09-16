import React from "react";
import { PieChart, DoubleBarChart } from "../components/ui";

const Revenue = () => {
  const data1 = [50, 30, 22.5, 20]; // Dummy data set 1
  const labels1 = ["#FCAD2A", "#0095FF", "#898989"];
  const percentage = [50, 30, 22.5, 20];
  const label = ["earn", "loan", "invest"];

  const datasets = [
    {
      label: "Dataset 1",
      data: [65, 59, 80, 81, 56, 55, 40, 70, 90, 60, 45, 75],
      backgroundColor: "#0095FF",
      barPercentage: 1.0,
      barThickness: 10,
    },
    {
      label: "Dataset 2",
      data: [55, 50, 70, 75, 50, 50, 30, 60, 80, 50, 35, 65],
      backgroundColor: "#00E096",
      barPercentage: 1.0,
      barRaduis: 8,
      barThickness: 10,
    },
  ];
  const labels = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];

  return (
    <div className="flex justify-between ">
      <div className="flex justify-center flex-col bg-white rounded-md  w-[270px] h-[250px] ">
        <div className="p-4 text-sm font-semibold">
          Product User distribution
        </div>
        <PieChart
          colors={labels1}
          data={data1}
          labels={label}
          percentages={percentage}
        />
      </div>
      <div className="flex justify-center flex-col bg-white rounded-md  w-[420px] h-[250px] p-2">
        <div className="p-4 text-sm font-semibold">Total Revenue</div>{" "}
        <DoubleBarChart labels={labels} datasets={datasets} title={""} />
      </div>
    </div>
  );
};

export default Revenue;
