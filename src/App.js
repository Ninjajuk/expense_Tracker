import Layout3 from "./Components/Layout/Layout3";
import { SnackbarProvider } from "notistack";
import "./styles.css";
import { MoneyProvider } from "./MoneyContext";

import "./tailwind.output.css";
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
        </div>
      </SnackbarProvider>
    </MoneyProvider>
  );
}
