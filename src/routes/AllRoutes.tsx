import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SIgnIn, SignUp } from "../auth";
import Nav from "../components/shared/Nav";
import Dashboard from "../pages/Dashboard";

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
          element: <Nav />,
          children: [
            {
              index: true,
              element: <Dashboard />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={Index}></RouterProvider>;
};

export default AllRoutes;
