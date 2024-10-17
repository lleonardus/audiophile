import { useModal } from "../hooks/useModal";
import { ListOfCategories } from "./ListOfCategories";

export function MobileMenu() {
  const { isModalOpen, setIsModalOpen, buttonRef, modalContentRef } =
    useModal();

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
          className="rounded-b-lg pb-[35px] pt-[84px] sm:pb-[67px] sm:pt-[108px]"
        />
      </div>
    </>
  );
}
