import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import RenderOutlet from "../components/Auth/RenderOutlet";
import { LogIn } from "lucide-react";
import Rigester from "../components/Auth/Rigester";

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
  {
    path:'/auth',
    Component: RenderOutlet,
    children:[
      {
        path:"/auth/login",
       element:<LogIn></LogIn>
      },
      {
        path:"/auth/rigester",
        element:<Rigester></Rigester>
      }
    ]
  }
]);
