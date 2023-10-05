import React from "react";

type Props = {};

const TransferIcon = (props: Props) => {
  return (
    <div>
      <svg
        width="24"
        height="25"
        viewBox="0 0 24 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M22 11.2781C21.99 8.16408 21.892 6.51308 20.828 5.45008C19.657 4.27808 17.771 4.27808 14 4.27808H10C6.229 4.27808 4.343 4.27808 3.172 5.45008C2 6.62108 2 8.50708 2 12.2781C2 16.0491 2 17.9351 3.172 19.1061C4.343 20.2781 6.229 20.2781 10 20.2781H11.5"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          opacity="0.5"
          d="M20 20.2781V14.2781M20 14.2781L22 16.2781M20 14.2781L18 16.2781"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.5 14.2781V20.2781M15.5 20.2781L17.5 18.2781M15.5 20.2781L13.5 18.2781"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          opacity="0.5"
          d="M10 16.2781H6"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          opacity="0.4"
          d="M2 10.2781H22"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default TransferIcon;
