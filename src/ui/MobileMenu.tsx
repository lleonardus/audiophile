import { useEffect, useState } from "react";
import { useModal } from "../hooks/useModal";
import { ListOfCategories } from "./ListOfCategories";

export function MobileMenu() {
  const { isModalOpen, setIsModalOpen, buttonRef, modalContentRef } =
    useModal();
  const [windowScrollY, setWindowScrollY] = useState(0);

  useEffect(
    function () {
      const modalContent = modalContentRef.current;
      function handleScroll() {
        setWindowScrollY(window.scrollY);
        if (modalContent.style && window.innerWidth < 640) {
          if (window.scrollY > windowScrollY) {
            modalContent.style.transform = "translateY(-30%)";
          } else {
            modalContent.style.transform = "translateY(0)";
          }
        }
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    },
    [modalContentRef, windowScrollY],
  );

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsModalOpen((isOpen) => !isOpen)}
        className="h-[15px] w-4 bg-[url('/assets/shared/tablet/icon-hamburger.svg')] bg-cover bg-no-repeat xl:hidden"
      ></button>
      <div
        className={`${isModalOpen ? "inline-block" : "hidden"} absolute inset-0 z-[9999] grid h-dvh w-full translate-y-[90px] bg-black/50 xl:hidden`}
      >
        <ListOfCategories
          componentRef={modalContentRef}
          handleLinkClick={() => setIsModalOpen(false)}
          className="absolute z-10 rounded-b-lg bg-white pb-[35px] pt-[84px] transition-transform sm:pb-[67px] sm:pt-[108px]"
        />
      </div>
    </>
  );
}
