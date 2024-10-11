import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(function() {
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
        className={`${isMenuOpen ? "inline-block" : "hidden"} absolute inset-0 grid h-dvh w-full translate-y-[90px] bg-black/50 xl:hidden`}
      >
        <div
          ref={menuRef}
          className="flex h-fit w-full flex-col gap-[68px] rounded-b-lg bg-white px-6 pb-[35px] pt-[84px] sm:flex-row sm:justify-between sm:gap-2.5 sm:px-10 sm:pb-[67px] sm:pt-[108px] *:sm:w-full"
        >
          <div className="relative rounded-lg bg-gray-100 px-5 pb-[22px] pt-[88px] text-center font-bold uppercase">
            <div className="absolute left-1/2 top-[-52px] w-[143px] -translate-x-1/2">
              <img
                className="h-full w-full"
                src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
                alt="Headphones"
              />
            </div>
            <h3 className="text-[0.9375rem] tracking-[0.0625rem] text-black">
              headphones
            </h3>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="mx-auto mt-[17px] flex w-min items-center gap-[13.32px] text-[0.8125rem] tracking-[0.0625rem] text-gray-900/50 transition-colors hover:text-orange-700"
            >
              <span>shop</span>
              <img
                className="h-[10px] w-[5px]"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="Icon arrow right"
              />
            </Link>
          </div>
          <div className="relative rounded-lg bg-gray-100 px-5 pb-[22px] pt-[88px] text-center font-bold uppercase">
            <div className="absolute left-1/2 top-[-52px] w-[143px] -translate-x-1/2">
              <img
                className="h-full w-full"
                src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
                alt="Speakers"
              />
            </div>
            <h3 className="text-[0.9375rem] tracking-[0.0625rem] text-black">
              speakers
            </h3>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="mx-auto mt-[17px] flex w-min items-center gap-[13.32px] text-[0.8125rem] tracking-[0.0625rem] text-gray-900/50 transition-colors hover:text-orange-700"
            >
              <span>shop</span>
              <img
                className="h-[10px] w-[5px]"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="Icon arrow right"
              />
            </Link>
          </div>
          <div className="relative rounded-lg bg-gray-100 px-5 pb-[22px] pt-[88px] text-center font-bold uppercase">
            <div className="absolute left-1/2 top-[-52px] w-[143px] -translate-x-1/2">
              <img
                className="h-full w-full"
                src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
                alt="Earphones"
              />
            </div>
            <h3 className="text-[0.9375rem] tracking-[0.0625rem] text-black">
              earphones
            </h3>
            <Link
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="mx-auto mt-[17px] flex w-min items-center gap-[13.32px] text-[0.8125rem] tracking-[0.0625rem] text-gray-900/50 transition-colors hover:text-orange-700"
            >
              <span>shop</span>
              <img
                className="h-[10px] w-[5px]"
                src="/assets/shared/desktop/icon-arrow-right.svg"
                alt="Icon arrow right"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
