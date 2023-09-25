import React from "react";
import {
  PieChart,
  ProgressBar,
  SingleVerticalBarChart,
} from "../../components/ui";
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

  const progress = 100;
  const progress2 = 70;

  return (
    <div className="flex justify-evenly space-x-3 ">
      <div className="flex justify-center flex-col bg-white rounded-md  w-[200px] h-[250px] space-y-4">
        <div className="p-2 font-semibold text-sm">Traffic by Location</div>
        <PieChart
          colors={labels1}
          data={data1}
          labels={label}
          percentages={percentage}
        />
      </div>
      <div className="flex justify-center flex-col bg-white rounded-md  w-[300px] h-[250px] p-2">
        <div className="font-semibold mb-4 text-sm">Traffic by Device</div>{" "}
        <SingleVerticalBarChart
          labels={labels}
          datasets={datasets}
          title={""}
        />
      </div>
      <div className="flex justify-center flex-col bg-white rounded-md  w-[180px] h-[250px] p-2 space-y-2 capitalize ">
        <div className=" text-sm font-semibold">Traffic by Website</div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">Google</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress}
              classname="h-full bg-[#1C1C1C1A] rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">Youtube</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress2}
              classname="h-full bg-[#1C1C1C1A] rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">instagram</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress}
              classname="h-full bg-[#000] rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">pinterest</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress2}
              classname="h-full bg-[##11C1C1A] rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">Facebook</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress}
              classname="h-full bg-[#1C1C1C1A] rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">Twitter</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress2}
              classname="h-full bg-[#1C1C1C1A] rounded"
            />
          </div>
        </div>
        <div className="flex justify-between items-center space-x-2">
          <span className="text-xs w-1/2">Tumbir</span>
          <div className="w-1/2">
            <ProgressBar
              percentage={progress}
              classname="h-full bg-[#1C1C1C1A] rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
