import { createBrowserRouter, RouterProvider, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Uers/Users";
import Products from "./Pages/Products/Products";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
};

export default App;
