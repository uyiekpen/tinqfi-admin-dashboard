import React, { ReactNode } from "react";

interface iForm {
  className: string;
  children: ReactNode;
}

const Form = ({ className, children }: iForm) => {
  return <form className={className}>{children}</form>;
};

export default Form;
