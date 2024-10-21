export function CashOnDeliveryMessage() {
  return (
    <div className="mt-8 flex flex-col items-center gap-4 text-center sm:mt-[30px] sm:flex-row sm:gap-8 sm:text-left">
      <img
        className="h-12 w-12"
        src="/assets/checkout/icon-cash-on-delivery.svg"
        alt="Cash on delivery icon"
      />
      <p className="text-base text-black/50">
        The ‘Cash on Delivery’ option enables you to pay in cash when our
        delivery courier arrives at your residence. Just make sure your address
        is correct so that your order will not be cancelled.
      </p>
    </div>
  );
}
