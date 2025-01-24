import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";
import Profile from "./pages/Profile";
import { ProfileInfo } from "./components/ProfileSection";

export default function Router() {
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
          path: "/products",
          element: <Products />,
        },
        {
          path: ":id",
          element: <ProductDetail />,
        },
        {
          path: "/profile",
          element: <Profile />,
          children: [
            { path: "info", element: <ProfileInfo /> },
            { path: "orders", element: <>orders</> },
            { path: "payments", element: <>payments</> },
            { path: "addresses", element: <>addresses</> },
          ],
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
