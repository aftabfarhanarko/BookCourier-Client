import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import RenderOutlet from "../components/Auth/RenderOutlet";
import { LogIn } from "lucide-react";
import Rigester from "../components/Auth/Rigester";
import Login from "../components/Auth/Login";
import DashBordLayOut from "../layout/DashBordLayOut";
import AddBookLibery from "../pages/dashboard/Librarian/AddBookLibery";

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
         element: <Login></Login>
      },
      {
        path:"/auth/rigester",
        element:<Rigester></Rigester>
      }
    ]
  },
  {
    path:"/deshbord",
    element: <DashBordLayOut></DashBordLayOut>,
    children:[
      {
        path:"/deshbord/addbooks",
        element:<AddBookLibery></AddBookLibery>
      }
    ]

  }
]);
