import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
import { Home } from "./pages/home/Home";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
