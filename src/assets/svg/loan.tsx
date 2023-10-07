import React from "react";

type Props = {};

const Loan = (props: Props) => {
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
          d="M19 14.7781V20.7781M19 20.7781L21 18.7781M19 20.7781L17 18.7781"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 12.7781C22 9.00708 22 7.12108 20.828 5.95008C19.657 4.77808 17.771 4.77808 14 4.77808H10C6.229 4.77808 4.343 4.77808 3.172 5.95008C2 7.12108 2 9.00708 2 12.7781C2 16.5491 2 18.4351 3.172 19.6061C4.343 20.7781 6.229 20.7781 10 20.7781H14"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
        <path
          opacity="0.4"
          d="M10 16.7781H6M13 16.7781H12.5M2 10.7781H22"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
        />
      </svg>
    </div>
  );
};

export default Loan;
