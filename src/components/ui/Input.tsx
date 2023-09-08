import React from "react";

interface iInput {
  type: "text" | "number" | "email" | "password";
  placeholder: string;
  className?: string;
}

const Input = ({ type, placeholder , className}: iInput) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} className={className}/>
    </div>
  );
};

export default Input;
