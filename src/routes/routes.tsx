import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import AddBook from "../pages/AddBook";
import BookDetails from "../pages/BookDetails";
import EditBook from "../components/edit/EditBook";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../pages/Wishlist";
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
        element: (
          <PrivateRoute>
            <AddBook />
          </PrivateRoute>
        ),
      },
      {
        path: "/bookdetails/:id",
        element: <BookDetails />,
      },
      {
        path: "/editbook/:id",
        element: <EditBook />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
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
