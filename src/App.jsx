import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/Uers/Users";
import Products from "./Pages/Products/Products";
import NavBar from "./components/navBar/NavBarr";
import Menu from "./components/menu/Menu";
import Footer from "./components/footer/Footer";
import Login from "./Pages/Login/Login";
import "./styles/global.scss";

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
            <Outlet />
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
      ],
    },
    {
      path: "/login",
      element: <Login/>
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
