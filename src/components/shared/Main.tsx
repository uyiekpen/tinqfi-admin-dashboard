import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className=" flex flex-col relative  ">
      <Nav />
      <div className="main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
