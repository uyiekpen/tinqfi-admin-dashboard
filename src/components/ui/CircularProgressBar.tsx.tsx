import React from "react";

interface CircularProgressBarProps {
  percentages: number[];
  radius: number;
  strokeWidth: number;
  strokeColors: string[];
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({
  percentages,
  radius,
  strokeWidth,
  strokeColors,
}) => {
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <svg height={radius * 2} width={radius * 2}>
      {percentages.map((percentage, index) => {
        const offset = ((100 - percentage) / 100) * circumference;
        const strokeColor = strokeColors[index] || "gray";

        return (
          <circle
            key={index}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
            fill="transparent"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        );
      })}
    </svg>
  );
};

export default CircularProgressBar;
