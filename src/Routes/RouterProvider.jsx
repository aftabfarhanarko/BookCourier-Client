import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    hydrateFallbackElement: <h1>Loding</h1>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
    ],
  },
]);
