import { useCart } from "../contexts/CartContext";
import { useModal } from "../hooks/useModal";
import { ButtonLink } from "./ButtonLink";
import { IconCart } from "./icons/IconCart";

export function Cart() {
  const {
    cartItems,
    totalPrice,
    removeAll,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  const { isModalOpen, setIsModalOpen, buttonRef, modalContentRef } =
    useModal();

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsModalOpen((isOpen) => !isOpen)}
        className={`relative transition-colors hover:text-orange-700 ${isModalOpen ? "text-orange-700" : ""}`}
      >
        {cartItems.length > 0 && (
          <span className="absolute -top-2.5 left-1/2 rounded-full bg-orange-700 px-2 py-1 text-[0.825rem] font-bold leading-[0.625rem] text-white">
            {cartItems.length}
          </span>
        )}
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
            <h3 className="text-lg uppercase">Cart({cartItems.length})</h3>
            <button
              onClick={removeAll}
              className="text-base tracking-[0px] text-black/50 underline"
            >
              Remove all
            </button>
          </div>
          <div className="mt-[31px] flex w-full flex-col gap-6">
            {cartItems.map((item) => {
              return (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={`/assets/cart/image-${item.slug}.jpg`}
                    alt={`${item.name} thubmnail`}
                    className="aspect-square h-full w-16 rounded-lg"
                  />
                  <div>
                    <h4 className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold uppercase tracking-[0px]">
                      {item.reducedName}
                    </h4>
                    <p className="text-[0.875rem] font-bold leading-[25px] tracking-[0px] text-black/50">
                      ${item.price.toLocaleString("en-US")}
                    </p>
                  </div>
                  <div className="ml-auto flex max-w-[96px] items-center justify-around gap-3 bg-gray-100 px-2 py-[7px] text-xs leading-[0.0625rem]">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="h-[18px] w-4 text-black/25 hover:text-orange-700"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="h-[18px] w-4 text-black/25 hover:text-orange-700"
                    >
                      +
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          {cartItems.length > 0 && (
            <div className="w-full">
              <div className="mb-6 mt-8 flex justify-between gap-2">
                <span className="text-base uppercase tracking-[0px] text-black/50">
                  Total
                </span>
                <span className="text-lg tracking-[0px]">
                  ${totalPrice.toLocaleString("en-US")}
                </span>
              </div>
              <ButtonLink
                to="/checkout"
                color="orange"
                width="100%"
                onClick={() => setIsModalOpen(false)}
              >
                Checkout
              </ButtonLink>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
