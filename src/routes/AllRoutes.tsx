import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SIgnIn, SignUp } from "../auth";
import Main from "../components/shared/Main";
import Dashboard from "../pages/DashBoard/Dashboard";
import User from "../pages/User/User";
import Profile from "../pages/User/Profile";
import Deposit from "../pages/Deposit/Deposit";
import DepositInspect from "../pages/Deposit/DepositInspect";

const AllRoutes = () => {
  const Index = createBrowserRouter([
    {
      path: "/",
      element: <SIgnIn />,
    },
    {
      path: "/create-account",
      element: <SignUp />,
    },

    {
      path: "/dashboard",
      children: [
        {
          element: <Main />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
            {
              path: "user",
              element: <User />,
            },
            {
              path: "profile",
              element: <Profile />,
            },

            {
              path: "deposit",
              element: <Deposit />,
            },
            {
              path: "deposit-details",
              element: <DepositInspect />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={Index}></RouterProvider>;
};

export default AllRoutes;
