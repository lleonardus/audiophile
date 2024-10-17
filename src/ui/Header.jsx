import { useLocation } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { Cart } from "./Cart";

export function Header() {
  const { pathname } = useLocation();

  return (
    <header
      className="relative text-xs tracking-[0.125rem] text-white sm:px-10 xl:px-[165px]"
      style={{ backgroundColor: pathname === "/" ? "#191919" : "black" }}
    >
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-8 sm:px-0 xl:pb-9 xl:pt-8">
        <MobileMenu />
        <Logo />
        <NavigationLinks className="hidden xl:inline-block" />
        <Cart />
      </div>
    </header>
  );
}
