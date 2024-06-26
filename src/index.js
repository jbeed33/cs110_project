import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import AdminPanel from "./components/admin/AdminPanel";
import Messages from "./components/messages/Messages";
import Dashboard from "./components/dashboard/Dashboard";
import SignUp from "./components/signup/SignUp";
import Settings from "./components/settings/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/admin",
    element: <AdminPanel />,
  },
  {
    path: "/messages",
    element: <Messages />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {path: "/settings",
    element: <Settings />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <RouterProvider router={router} />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
