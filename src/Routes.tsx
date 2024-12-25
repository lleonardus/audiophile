import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { AppLayout } from "./ui/AppLayout";
import { ErrorPage } from "./ui/ErrorPage";
import { Home } from "./pages/home/Home";
import { Categories } from "./pages/categories/Categories";
import { Products } from "./pages/products/Products";
import { Checkout } from "./pages/checkout/Checkout";

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
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

export function Routes() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 2 * 1000 },
          error: { duration: 5 * 1000 },
          style: {
            fontSize: "16px",
            fontWeight: 700,
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "black",
          },
        }}
      />
    </>
  );
}
