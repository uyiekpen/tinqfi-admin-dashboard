import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SIgnIn, SignUp } from "../auth";
import Main from "../components/shared/Main";
import Dashboard from "../pages/DashBoard/Dashboard";
import Deposit from "../pages/Deposit/Deposit";
import DepositInspect from "../pages/Deposit/DepositInspect";
import Earn from "../pages/earn/Earn";
import Transfer from "../pages/transfer/Transter";
import Profile from "../pages/User/Profile";
import User from "../pages/User/User";
import Withdrawal from "../pages/withdrawal/Withdrawal";
import WithDrawalDetails from "../pages/withdrawal/WithdrawalDetails";


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

            {
              path: "withdrawal",
              element: <Withdrawal />,
            },
            {
              path: "withdrawal-details",
              element: <WithDrawalDetails />,
            },
            {
              path: "transfer",
              element: <Transfer />,
            },
            {
              path: "earn",
              element: <Earn />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={Index}></RouterProvider>;
};

export default AllRoutes;
