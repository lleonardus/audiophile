import { useCart } from "../../../contexts/CartContext";
import { ButtonLink } from "../../../ui/ButtonLink";

export function SummarySection({ handleSubmit }: { handleSubmit: () => void }) {
  const { cartItems, totalPrice, shipping, vat, total } = useCart();

  function handleClick() {
    document.documentElement.scrollIntoView({ behavior: "smooth" });
    handleSubmit();
  }

  return (
    <div className="rounded-lg bg-white px-6 py-8 sm:px-[33px] xl:h-fit">
      <h3 className="text-lg uppercase">Summary</h3>
      <div className="mt-[31px] flex w-full flex-col gap-6">
        {cartItems.map((item) => {
          return (
            <div key={item.id} className="flex gap-4">
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
              <p className="ml-auto text-base font-bold text-black/50">
                x{item.quantity}
              </p>
            </div>
          );
        })}
      </div>
      <div className="w-full">
        <div className="mt-8 flex justify-between gap-2">
          <span className="text-base uppercase tracking-[0px] text-black/50">
            Total
          </span>
          <span className="text-lg tracking-[0px]">
            ${totalPrice.toLocaleString("en-US")}
          </span>
        </div>
        <div className="mt-2 flex justify-between gap-2">
          <span className="text-base uppercase tracking-[0px] text-black/50">
            Shipping
          </span>
          <span className="text-lg tracking-[0px]">
            ${shipping.toLocaleString("en-US")}
          </span>
        </div>
        <div className="mt-2 flex justify-between gap-2">
          <span className="text-base uppercase tracking-[0px] text-black/50">
            Vat (Included)
          </span>
          <span className="text-lg tracking-[0px]">
            ${vat.toLocaleString("en-US")}
          </span>
        </div>
        <div className="mb-6 mt-6 flex justify-between gap-2">
          <span className="text-base uppercase tracking-[0px] text-black/50">
            Grand Total
          </span>
          <span className="text-lg tracking-[0px] text-orange-700">
            ${total.toLocaleString("en-US")}
          </span>
        </div>
        <ButtonLink
          onClick={handleClick}
          type="submit"
          color="orange"
          width="100%"
        >
          Continue & Pay
        </ButtonLink>
      </div>
    </div>
  );
}
