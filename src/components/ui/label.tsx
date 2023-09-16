import React, { ReactNode } from "react";

interface iLabel {
  className: string;
  htmlFor: string;
  children: ReactNode;
}

const Label = ({ children, className, htmlFor }: iLabel) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {" "}
      {children}
    </label>
  );
};

export default Label;
