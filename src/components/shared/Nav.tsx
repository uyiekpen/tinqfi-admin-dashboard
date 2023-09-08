import React from "react";
import Header from "./header";
import Sidebar from "./Sidebar";

const Nav = () => {
  return (
    <div className="flex">
      <Sidebar />
      <Header />
    </div>
  );
};

export default Nav;
