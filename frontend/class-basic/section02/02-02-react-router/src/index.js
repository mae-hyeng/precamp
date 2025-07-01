import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Aaa from "./routes/Aaa";
import Bbb from "./routes/Bbb";

const myPageList = createBrowserRouter([
    { path: "/", element: <App /> },
    { path: "/Aaa", element: <Aaa /> },
    { path: "/Bbb", element: <Bbb /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={myPageList} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
