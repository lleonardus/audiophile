import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../contexts/CartContext";
import { ButtonLink } from "../../../ui/ButtonLink";

export function SuccessMessageModal() {
  const { cartItems, total, removeAll } = useCart();
  const item = cartItems[0];

  const modalContentRef = useRef(null);
  const navigate = useNavigate("/");

  useEffect(
    function () {
      function handleClick(e) {
        const isInsideBlackArea =
          modalContentRef.current?.parentElement.contains(e.target);
        const isInsideWhiteArea = modalContentRef.current?.contains(e.target);
        const isLink = e.target.tagName === "A";

        if (
          (!isInsideBlackArea && !isLink) ||
          (isInsideBlackArea && !isInsideWhiteArea)
        ) {
          navigate("/");
          removeAll();
        } else if (
          (!isInsideWhiteArea && isLink) ||
          e.target.tagName === "svg"
        ) {
          removeAll();
        }
      }

      window.addEventListener("mousedown", handleClick);
      return () => window.removeEventListener("mousedown", handleClick);
    },
    [navigate, removeAll],
  );

  useEffect(
    function () {
      function handleScroll() {
        const scrollTop = window.scrollY;
        if (modalContentRef.current?.style && window.innerWidth < 640) {
          modalContentRef.current.style.transform = `translateY(-${scrollTop}px)`;
        }
      }

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    },
    [modalContentRef],
  );

  return (
    <div className="fixed inset-0 z-20 h-full min-h-screen translate-y-[90px] bg-black/50 px-6">
      <div
        ref={modalContentRef}
        className="mt-[30px] rounded-lg bg-white p-8 sm:mx-auto sm:w-[540px] sm:p-12"
      >
        <img
          src="/assets/checkout/icon-order-confirmation.svg"
          alt="Order confirmation icon"
        />
        <h3 className="mt-[23px] text-[1.5rem] font-bold uppercase leading-7 tracking-[0.05375rem] sm:mt-[33px] sm:text-3xl">
          Thank you <br /> for your order
        </h3>
        <p className="mt-4 text-base text-black/50 sm:mt-6">
          You will receive an email confirmation shortly.
        </p>
        <div className="my-6 overflow-hidden rounded-lg sm:mb-[46px] sm:mt-[33px] sm:grid sm:grid-cols-[1.5fr_1fr]">
          <div className="bg-gray-100 pb-3 pl-4 pr-6 pt-6 sm:p-6 sm:pb-0">
            <div className="flex gap-4">
              <img
                src={`/assets/cart/image-${item?.slug}.jpg`}
                alt={`${item?.name} thubmnail`}
                className="aspect-square h-full w-16 rounded-lg"
              />
              <div>
                <h4 className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold uppercase tracking-[0px]">
                  {item?.reducedName}
                </h4>
                <p className="text-[0.875rem] font-bold leading-[25px] tracking-[0px] text-black/50">
                  ${item?.price.toLocaleString("en-US")}
                </p>
              </div>
              <p className="ml-auto text-base font-bold text-black/50">
                x{item?.quantity}
              </p>
            </div>
            {cartItems.length > 1 && (
              <p className="border-t border-t-black/10 pb-[25px] pt-3 text-center text-[0.75rem] font-bold tracking-[-0.013125rem] text-black/50">
                and other {cartItems.length - 1} item(s)
              </p>
            )}
          </div>
          <div className="flex flex-col justify-between gap-2 bg-black px-6 pb-[19px] pt-[15px] sm:justify-center">
            <span className="text-base uppercase tracking-[0px] text-white/50">
              Grand Total
            </span>
            <span className="text-lg tracking-[0px] text-white">
              ${total.toLocaleString("en-US")}
            </span>
          </div>
        </div>
        <ButtonLink onClick={removeAll} to="/" color="orange" width="100%">
          Back to Home
        </ButtonLink>
      </div>
    </div>
  );
}
