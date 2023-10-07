import React from "react";

type Props = {};

const Exchange = (props: Props) => {
  return (
    <div>
      <svg
        width="22"
        height="23"
        viewBox="0 0 22 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.5"
          d="M11 21.2781C16.5228 21.2781 21 16.8009 21 11.2781C21 5.75523 16.5228 1.27808 11 1.27808C5.47715 1.27808 1 5.75523 1 11.2781C1 16.8009 5.47715 21.2781 11 21.2781Z"
          stroke="black"
          stroke-width="1.5"
        />
        <path
          d="M5.5 3.27808L12.878 11.2781V6.77808M16.378 19.1561L8.878 11.2771V15.7771"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
};

export default Exchange;
