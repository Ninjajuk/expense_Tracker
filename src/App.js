import Layout3 from "./Components/Layout/Layout3";
import { SnackbarProvider } from "notistack";
import "./styles.css";
import { MoneyProvider } from "./MoneyContext";

import "./tailwind.output.css";
import Dashboard1 from "./Components/TailWindDashboar/Dashboard1";
import Dashboard2 from "./Components/TailWindDashboar/Dashboard2";
export default function App() {
  return (
    <MoneyProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <div>
          {/* <SidebarMain /> */}
          {/* <Layout2 /> */}
          <Layout3 />
          {/* <Layout4 /> */}
          {/* <Addincome /> */}
          {/* <ExpenseForm /> */}
          {/* <LoginForm/> */}
          {/* <RegistrationForm /> */}
          {/* <Dashboard1/>
          <Dashboard2/> */}
        </div>
      </SnackbarProvider>
    </MoneyProvider>
  );
}
