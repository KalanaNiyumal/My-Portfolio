import * as React from "react";
import * as ReactDOM from "react-dom/client";
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AboutMe from "./Pages/AboutMe";
import Project from "./Pages/Project";
import Contact from "./Pages/Contact";
import Skills from "./Pages/Skills";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutMe/>,
  },
  {
    path: "/project",
    element: <Project/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
