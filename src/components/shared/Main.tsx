import { Outlet } from "react-router-dom";
import Nav from "./Nav";

const Main = () => {
  return (
    <div className=" flex flex-col relative">
      <Nav />
      <div className="absolute top-20 left-60 h-full w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
