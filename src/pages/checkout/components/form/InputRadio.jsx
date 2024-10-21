export function InputRadio({
  children,
  paymentMethod,
  setPaymentMethod,
  value,
}) {
  return (
    <div
      className={`${paymentMethod === value ? "border-orange-700" : "border-black/40"} flex w-full cursor-pointer items-center gap-4 rounded-lg border px-6 py-[19px] text-[0.8750rem] font-bold tracking-[-0.015625rem] transition-colors placeholder:text-black/40 hover:border-orange-700 focus:outline-none sm:col-start-2`}
      onClick={() => setPaymentMethod(value)}
    >
      <span
        className={`${paymentMethod === value ? "after:bg-orange-700" : "after:bg-white"} relative inline-block h-[20px] w-[20px] rounded-full border border-black/40 after:absolute after:left-1/2 after:top-1/2 after:h-[10px] after:w-[10px] after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-full after:transition-colors`}
      ></span>
      <span>{children}</span>
    </div>
  );
}
