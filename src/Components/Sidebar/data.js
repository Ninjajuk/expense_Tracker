import {
  FaHome,
  FaUsers,
  FaWrench,
  FaPowerOff,
  FaCreditCard,
  FaAngleRight,
  FaAngleDown,
  FaAngleUp,
  FaRegHeart
} from "react-icons/fa";
import {
  MdOutlineClose,
  MdOutlineDashboard,
  MdAccountBalance,
  MdCreditCard,
  MdOutlineNotificationsActive,
  MdOutlineCalendarMonth,
  MdAttachMoney,
  MdMoneyOff,
  MdOutlineCandlestickChart
} from "react-icons/md";

export const expenseTracker = [
  {
    menu: "Dashboard",
    icon: <MdOutlineDashboard />,
    submenu: "",
    path: "/dashboard",
    active: false
  },
  {
    menu: "My Money",
    icon: <MdAttachMoney />,

    submenu: [
      { title: "Add Income", path: "/addincome" },
      { title: "Add Expense", path: "/expense" },
      { title: "Others", path: "/pan" }
    ],
    path: "/mymoney",
    active: false
  },

  {
    menu: "Stocks",
    icon: <MdOutlineCandlestickChart />,
    submenu: [
      { title: "Equity", path: "/stocks/profile", active: false },
      { title: "Mutual Funds", path: "/stocks/address", active: false },
      { title: "Bonds", path: "/stocks/pan", active: false }
    ],
    path: "/stocks",
    active: false
  },

  {
    menu: "Bank Accounts",
    icon: <MdAccountBalance />,
    submenu: [
      { title: "Cards", path: "/bankscards", active: false },
      { title: "Transactions", path: "/transactions", active: false }
      // { title: "Bonds", path: "/pan" }
    ],
    path: "/banks",

    active: false
  },
  {
    menu: "Notifications",
    icon: <MdOutlineNotificationsActive />,
    path: "/notifications",
    submenu: "",

    active: false
  },
  {
    menu: "Calender",
    icon: <MdOutlineCalendarMonth />,
    submenu: "",
    path: "/calender",
    active: false
  }
];
