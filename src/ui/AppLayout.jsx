import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="w-full xl:max-w-[1920px]">
      <header>header</header>
      <main>
        <Outlet />
        <div className="hidden">about us</div>
      </main>
      <footer className="hidden">footer</footer>
    </div>
  );
}
