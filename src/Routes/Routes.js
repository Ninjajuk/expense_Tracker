import { createBrowserRouter } from "react-router-dom";
import AdminMainContent from "../Components/Dashboard.js/AdminMainContent";
import LoginForm from "../Components/Form/LoginForm";
import RegistrationForm from "../Components/Form/RegistrationForm";
import Layout5 from "../Components/Layout/Layout5";

import Modal1 from "../Components/Modal1";

import Addincome from "../pages/AddIncome";

import ExpensePage from "../pages/ExpensePage";
import Home from "../pages/Home";
import MyMoney from "../pages/MyMoney";

import StocksPage from "../pages/StocksPage";
import Team from "../pages/Team";

import NotificationsPage from "../pages/NotificationPage";
import BankAccountPage from "../pages/BankAccountPage";
import TransactionsPage from "../pages/TransactiosPage";
import CardsPage from "../pages/BankCard";
import BarChart1 from "../Components/Chart/Chart1";
import StockLayout from "../pages/Stocklayout";
import Dashboard1 from "../Components/TailWindDashboar/Dashboard1";
import Dashboard2 from "../Components/TailWindDashboar/Dashboard2";
import Dashboard3 from "../Components/TailWindDashboar/Dashboard3";
import Dashboard4 from "../Components/TailWindDashboar/Dashboard4";
import Dashboard5 from "../Components/TailWindDashboar/Dashboard5";
import Dashboard6 from "../Components/TailWindDashboar/Dashboard6";
import Dashboard7 from "../Components/TailWindDashboar/Dashboard7";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/dashboard", // Add a leading slash
    element: <AdminMainContent />
  },
  {
    path: "/team", // Add a leading slash
    element: <Team />
  },
  {
    path: "/mymoney", // Add a leading slash
    element: <MyMoney />
  },
  {
    path: "/addincome", // Add a leading slash
    element: <Addincome />
  },
  {
    path: "/expense", // Add a leading slash
    element: <ExpensePage />
  },
  {
    path: "/register", // Add a leading slash
    element: <RegistrationForm />
  },
  {
    path: "/login", // Add a leading slash
    element: <LoginForm />
  },
  {
    path: "/modal", // Add a leading slash
    element: <Modal1 />
  },
  {
    path: "/banks", // Add a leading slash
    element: <BankAccountPage />
  },
  {
    path: "/transactions", // Add a leading slash
    element: <TransactionsPage />
  },
  {
    path: "/bankscards", // Add a leading slash
    element: <CardsPage />
  },
  {
    path: "/stocks", // Add a leading slash
    element: <StocksPage />
  },
  {
    path: "/notifications", // Add a leading slash
    element: <NotificationsPage />
  },
  {
    path: "/layoutmain", // Add a leading slash
    element: <Layout5 />
  },
  {
    path: "/mymoney", // Add a leading slash
    element: <MyMoney />
  },
  {
    path: "/chart",
    element: <BarChart1 />
  },
  {
    path: "/stcoklayout",
    element: <StockLayout />
  },
  {
    path: "/dashboard1",
    element: <Dashboard1/>
  },
  {
    path: "/dashboard2",
    element: <Dashboard2/>
  },
  {
    path: "/dashboard3",
    element: <Dashboard3/>
  },
  {
    path: "/dashboard4",
    element: <Dashboard4/>
  },
  {
    path: "/dashboard5",
    element: <Dashboard5/>
  },
  {
    path: "/dashboard6",
    element: <Dashboard6/>
  },
  {
    path: "/dashboard7",
    element: <Dashboard7/>
  }
]);
export default router;
