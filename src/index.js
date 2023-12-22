import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import router from "./Routes/Routes";

import App from "./App";

import { RouterProvider } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </StrictMode>
);
