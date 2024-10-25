import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="h-full min-h-dvh w-full bg-gray-50 xl:max-w-[1920px]">
      <Header />
      <main className="mt-[89px]">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}
