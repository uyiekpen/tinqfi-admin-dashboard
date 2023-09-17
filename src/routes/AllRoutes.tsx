import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SIgnIn, SignUp } from "../auth";
import Main from "../components/shared/Main";
import Dashboard from "../pages/Dashboard";
import User from "../pages/User";

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
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={Index}></RouterProvider>;
};

export default AllRoutes;
