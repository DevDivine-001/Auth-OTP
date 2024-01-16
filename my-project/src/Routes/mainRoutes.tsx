import { createBrowserRouter } from "react-router-dom";
import Register from "../Auth/Register";
import Signin from "../Auth/Signin";
import Authenticate from "../Auth/Authenticate";
import HomeSceen from "../Pages/Home/HomeSceen";
import Layout from "../components/common/Layout";
import PrivateRoute from "./PrivateRoutes";

// import PrivateRoute from "./PrivateRoutes"

export const mainRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <HomeSceen />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/sign-in",
    element: <Signin />,
  },
  {
    path: "/authenticate-token",
    element: <Authenticate />,
  },
]);
