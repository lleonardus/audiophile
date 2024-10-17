import { useModal } from "../hooks/useModal";
import { ButtonLink } from "./ButtonLink";
import { IconCart } from "./icons/IconCart";

export function Cart() {
  const { isModalOpen, setIsModalOpen, buttonRef, modalContentRef } =
    useModal();

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsModalOpen((isOpen) => !isOpen)}
        className="text-white transition-colors hover:text-orange-700"
        style={{ color: isModalOpen ? "#d87d4a" : "" }}
      >
        <IconCart />
      </button>
      <div
        className={`${isModalOpen ? "inline-block" : "hidden"} absolute inset-0 z-[9999] grid h-dvh w-full translate-y-[90px] bg-black/50`}
      >
        <div
          ref={modalContentRef}
          className="absolute right-0 mx-6 mt-6 flex h-fit w-full max-w-[327px] flex-col items-center rounded-lg bg-white px-[28px] py-8 text-black sm:mx-[39px] xl:mx-[165px]"
        >
          <div className="flex w-full justify-between gap-2">
            <h3 className="text-lg uppercase">Cart(3)</h3>
            <button className="text-base tracking-[0px] text-black/50 underline">
              Remove all
            </button>
          </div>
          <div className="w-full">
            <div className="mb-6 mt-8 flex justify-between gap-2">
              <span className="text-base uppercase tracking-[0px] text-black/50">
                Total
              </span>
              <span className="text-lg tracking-[0px]">$5,396</span>
            </div>
            <ButtonLink to="/" color="orange" width="100%">
              Checkout
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}
