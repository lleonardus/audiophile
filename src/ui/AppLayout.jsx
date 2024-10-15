import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function AppLayout() {
  return (
    <div className="h-dvh w-full xl:max-w-[1920px]">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
