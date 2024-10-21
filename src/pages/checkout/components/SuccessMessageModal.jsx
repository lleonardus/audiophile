import { useCart } from "../../../contexts/CartContext";
import { ButtonLink } from "../../../ui/ButtonLink";

export function SuccessMessageModal({ modalContentRef }) {
  const { cartItems, totalPrice } = useCart();
  const item = cartItems[0];
  const shipping = 50;
  const vat = 0.2 * totalPrice;
  const total = totalPrice + shipping + vat;

  function reduceName(item) {
    let slug = item.slug.replaceAll("-", " ");
    let name = item.name.length < slug.length ? item.name : slug;

    name = name.split(" ").slice(0, -1).join(" ");

    return name.length <= 12 ? name : name.split(" ")[0];
  }

  return (
    <div className="absolute inset-0 z-[99999] h-full min-h-screen translate-y-[90px] bg-black/50 px-6">
      <div
        ref={modalContentRef}
        className="mt-[134px] rounded-lg bg-white p-8 sm:mx-auto sm:w-[540px] sm:p-12 xl:mt-[125px]"
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
                src={`/assets/cart/image-${item.slug}.jpg`}
                alt={`${item.name} thubmnail`}
                className="aspect-square h-full w-16 rounded-lg"
              />
              <div>
                <h4 className="w-[100px] overflow-hidden text-ellipsis whitespace-nowrap text-base font-bold uppercase tracking-[0px]">
                  {reduceName(item)}
                </h4>
                <p className="text-[0.875rem] font-bold leading-[25px] tracking-[0px] text-black/50">
                  ${item.price.toLocaleString("en-US")}
                </p>
              </div>
              <p className="ml-auto text-base font-bold text-black/50">
                x{item.quantity}
              </p>
            </div>
            {cartItems.length > 1 && (
              <p className="border-t border-t-black/10 pb-[25px] pt-3 text-center text-[0.75rem] font-bold tracking-[-0.013125rem] text-black/50">
                and other {cartItems.length} item(s)
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
        <ButtonLink to="/" color="orange" width="100%">
          Back to Home
        </ButtonLink>
      </div>
    </div>
  );
}
