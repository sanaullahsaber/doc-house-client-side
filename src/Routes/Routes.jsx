import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "sign-up",
    element: <SignUp></SignUp>,
  },
  {
    path: "sign-in",
    element: <SignIn></SignIn>,
  },
]);

export default router;
