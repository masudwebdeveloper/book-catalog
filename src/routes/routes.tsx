import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addbook",
        element: <AddBook />,
      },
    ],
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
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
