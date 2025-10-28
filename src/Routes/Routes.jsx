import { createBrowserRouter } from "react-router";
import Root from "../layouts/Root";
import Navbar from "../Components/header/Navbar";

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
        Component: () => <h1>About</h1>,
      },
    ],
  },
]);
