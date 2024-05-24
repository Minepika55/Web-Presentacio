import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./Contact";
import Extres from "./Extres";
import Links from "./links";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "curriculum",
    element: <div>BUIT</div>,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "extres",
    element: <Extres />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

<RouterProvider router={router} />;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Links />
    <RouterProvider router={router} />
  </React.StrictMode>
);
