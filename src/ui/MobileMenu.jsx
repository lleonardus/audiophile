import { useEffect, useRef, useState } from "react";
import { ListOfCategories } from "./ListOfCategories";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(function () {
    function handleClickOutside(e) {
      const isOutsideMenu = !menuRef.current?.contains(e.target);
      const isNotButton = !buttonRef.current?.contains(e.target);

      if (isOutsideMenu && isNotButton) setIsMenuOpen(false);
    }

    window.addEventListener("mousedown", handleClickOutside);

    return () => window.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        className="h-[15px] w-4 bg-[url('/assets/shared/tablet/icon-hamburger.svg')] bg-cover bg-no-repeat xl:hidden"
      ></button>
      <div
        className={`${isMenuOpen ? "inline-block" : "hidden"} absolute inset-0 z-[9999] grid h-dvh w-full translate-y-[90px] bg-black/50 xl:hidden`}
      >
        <ListOfCategories
          componentRef={menuRef}
          handleLinkClick={() => setIsMenuOpen(false)}
          className="rounded-b-lg pb-[35px] pt-[84px] sm:pb-[67px] sm:pt-[108px]"
        />
      </div>
    </>
  );
}
