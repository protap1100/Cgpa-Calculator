import { createBrowserRouter } from "react-router-dom";
import MainPage from "../pages/main/MainPage";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/errorElement/ErrorElement";
import ContactMe from "../pages/contactMe/ContactMe";
import CGPACalculator from "../pages/CGPACalculator/CGPACalculator";
import CGPA2514 from "../pages/CGPA2514/CGPA2514.JSX";

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
        path: "/cgpa",
        element: <CGPACalculator></CGPACalculator>,
      },
      {
        path: '/2514-CGPA',
        element: <CGPA2514></CGPA2514>
      }
    ],
  },
]);
