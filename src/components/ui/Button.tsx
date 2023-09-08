import React, { ReactNode } from "react";

interface iButton {
  className: string;
  type: "submit" | "button";
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ children, onClick, className, type }: iButton) => {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
