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
import Profile from "../pages/dashboard/Profile/Profile";
import PrivetRoute from "./PrivetRoute";
import LibrarianRoute from "./LibrarianRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import Invortorey from "../pages/dashboard/User/Invortorey";
import SettingsComponent from "../pages/dashboard/Profile/SettingsComponent";
import ProfileNavbar from "../pages/Home/ProfileNavbar";

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
        path: "/books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/settingse",
        element: <SettingsComponent></SettingsComponent>,
      },
      {
        path: "/profile2",
        element: (
          <PrivetRoute>
            <ProfileNavbar></ProfileNavbar>
          </PrivetRoute>
        ),
      },
      {
        path: "/detlicesPages/:id",
        element: (
          <PrivetRoute>
            <DetlicesPages></DetlicesPages>{" "}
          </PrivetRoute>
        ),
      },
    ],
  },
  // Auth Layout
  {
    path: "/auth",
    Component: RenderOutlet,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/rigester",
        element: <Rigester></Rigester>,
      },
    ],
  },
  // Dashbord
  {
    path: "/deshbord",
    element: (
      <PrivetRoute>
        <DashBordLayOut></DashBordLayOut>{" "}
      </PrivetRoute>
    ),
    children: [
      {
        path: "/deshbord/addbooks",
        element: (
          <LibrarianRoute>
            <AddBookLibery></AddBookLibery>
          </LibrarianRoute>
        ),
      },
      {
        path: "/deshbord/userorder",
        element: (
          <UserRoute>
            <UserOrderTable></UserOrderTable>
          </UserRoute>
        ),
      },
      {
        path: "/deshbord/pymentSuccess",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/deshbord/paymenthistory",
        element: (
          <UserRoute>
            <PaymentHistory></PaymentHistory>
          </UserRoute>
        ),
      },
      {
        path: "/deshbord/inventory",
        element: (
          <UserRoute>
            <Invortorey></Invortorey>
          </UserRoute>
        ),
      },
      {
        path: "/deshbord/myBooks",
        element: (
          <LibrarianRoute>
            <MyBooks></MyBooks>
          </LibrarianRoute>
        ),
      },
      {
        path: "/deshbord/orderAllBooks",
        element: (
          <LibrarianRoute>
            <OrderAllBooks></OrderAllBooks>
          </LibrarianRoute>
        ),
      },
      {
        path: "/deshbord/adminuserDataSloved",
        element: (
          <AdminRoute>
            <AlluserData></AlluserData>
          </AdminRoute>
        ),
      },
      {
        path: "/deshbord/manazeBooks",
        element: (
          <AdminRoute>
            <ManazeBooks></ManazeBooks>
          </AdminRoute>
        ),
      },
      {
        path: "/deshbord/profileLoginUser",
        element: <Profile></Profile>,
      },
      {
        path: "/deshbord/settings",
        element: <SettingsComponent></SettingsComponent>,
      },
    ],
  },
]);
