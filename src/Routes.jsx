import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
import { Home } from "./pages/home/Home";
import { Categories } from "./pages/categories/Categories";
import { Products } from "./pages/products/Products";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories/:category",
        element: <Categories />,
      },
      {
        path: "/products/:productSlug",
        element: <Products />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
