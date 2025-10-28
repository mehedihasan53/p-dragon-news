import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Navbar from "../Components/header/Navbar";
import About from "../pages/About";
import Career from "../pages/Career";
import CategoryNews from "../pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/navbar",
        Component: Navbar,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
      {
        path: "/categories/:id",
        Component: CategoryNews,
      },
    ],
  },
]);
