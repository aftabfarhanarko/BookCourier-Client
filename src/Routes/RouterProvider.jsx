import { createBrowserRouter } from "react-router";
import MainLayOut from "../layout/MainLayOut";
import Home from "../pages/Home/Home";
import RenderOutlet from "../components/Auth/RenderOutlet";
import { LogIn } from "lucide-react";
import Rigester from "../components/Auth/Rigester";
import Login from "../components/Auth/Login";
import DashBordLayOut from "../layout/DashBordLayOut";
import AddBookLibery from "../pages/dashboard/Librarian/AddBookLibery";
import AllBooks from "../pages/Home/AllBooks/AllBooks";
import DetlicesPages from "../pages/Home/DetlicesPages/DetlicesPages";
import UserOrderTable from "../pages/dashboard/User/UserOrderTable";
import PaymentSuccess from "../pages/dashboard/Payment/PaymentSuccess";
import PaymentHistory from "../pages/dashboard/User/PaymentHistory";
import MyBooks from "../pages/dashboard/Librarian/MyBooks";
import OrderAllBooks from "../pages/dashboard/Librarian/OrderAllBooks";
import AlluserData from "../pages/dashboard/Admin/AlluserData";
import ManazeBooks from "../pages/dashboard/Admin/ManazeBooks";

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
      {
        path:"/books",
        element:<AllBooks></AllBooks>
      },
      {
        path:"/detlicesPages/:id",
        element:<DetlicesPages></DetlicesPages>
      }
    ],
  },
  // Auth Layout
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
  // Dashbord
  {
    path:"/deshbord",
    element: <DashBordLayOut></DashBordLayOut>,
    children:[
      {
        path:"/deshbord/addbooks",
        element:<AddBookLibery></AddBookLibery>
      },
      {
        path:"/deshbord/userorder",
        element:<UserOrderTable></UserOrderTable>
      },
      {
        path:"/deshbord/pymentSuccess",
        element:<PaymentSuccess></PaymentSuccess>
      },
      {
        path:"/deshbord/paymenthistory",
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:"/deshbord/myBooks",
        element:<MyBooks></MyBooks>
      },
      {
        path:"/deshbord/orderAllBooks",
        element:<OrderAllBooks></OrderAllBooks>
      },
      {
        path:"/deshbord/adminuserDataSloved",
        element:<AlluserData></AlluserData>
      },
      {
        path:"/deshbord/manazeBooks",
        element:<ManazeBooks></ManazeBooks>
      },

    ]

  }
]);
