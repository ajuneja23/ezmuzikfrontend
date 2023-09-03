/** @format */

import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.js";
import Error from "./components/ErrorPage/Error.js";
import Signup from "./components/Signup/Signup.js";
import CreateSearch from "./components/CreateSearch/CreateSearch.js";
import QueryInfo from "./components/QueryInfo/QueryInfo.js";
import Login from "./components/Login/Login.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/search",
    element: <CreateSearch />,
  },
  {
    path: "/queryinfo",
    element: <QueryInfo />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
