import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Products from "./pages/Products";

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
          path: "/login",
          element: <></>,
        },
        {
          path: "/cart",
          element: <></>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
