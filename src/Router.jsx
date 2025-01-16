import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductDetail from "./pages/ProductDetail";

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
          path: "product/:id",
          element: <ProductDetail />,
        },
        {
          path: "/login",
          element: <></>,
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
