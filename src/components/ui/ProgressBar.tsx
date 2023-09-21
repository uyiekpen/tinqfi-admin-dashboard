import React from "react";

interface ProgressBarProps {
  percentage: number;
  classname: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, classname }) => {
  return (
    <div className="w-full h-1 bg-tinqfiGray rounded">
      <div className={classname} style={{ width: `${percentage}%` }}></div>
    </div>
  );
};

export default ProgressBar;
