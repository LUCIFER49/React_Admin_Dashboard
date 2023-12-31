import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Uers/Users";
import User from "./Pages/User/User";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import NavBar from "./components/navBar/NavBarr";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./Pages/Login/Login";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import "./styles/global.scss";

const queryClient = new QueryClient();

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        {/* calling Nav bar */}
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            {/* calling of menu */}
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        {/* calling footer */}
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
