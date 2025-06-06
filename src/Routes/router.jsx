import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";
import ContactMe from "../pages/contactMe/ContactMe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage></MainPage>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/contact-me",
        element: <ContactMe></ContactMe>,
      },
      {
        path : "/cgpa",
        element: <Home></Home>,
      },
    ],
  },
]);
