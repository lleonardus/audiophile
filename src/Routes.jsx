import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
import { Home } from "./pages/home/Home";
import { Categories } from "./pages/categories/Categories";

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
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
