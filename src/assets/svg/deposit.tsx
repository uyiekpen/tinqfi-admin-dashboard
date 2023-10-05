import React from "react";

type Props = {isActive:boolean};

const DepositIcon = (props: Props) => {
    const [isActive , setIsActive] = React.useState()
  return (
    <div>
      <svg
        width="23"
        height="24"
        viewBox="0 0 23 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.125 3.65308L11.5 12.2781M11.5 12.2781H16.6213M11.5 12.2781V7.15674"
          stroke={isActive ? "#FCAD2A" : "black"} // Change stroke color conditionally
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.5"
          d="M11.4993 2.69482C6.20647 2.69482 1.91602 6.98528 1.91602 12.2782C1.91602 17.571 6.20647 21.8615 11.4993 21.8615C16.7922 21.8615 21.0827 17.571 21.0827 12.2782"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default DepositIcon;
