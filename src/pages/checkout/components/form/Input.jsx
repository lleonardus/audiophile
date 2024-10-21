export function Input({ id, type = "text", isInvalid, placeholder, register }) {
  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`${isInvalid ? "border-[2px] border-red" : "hover:border-orange-700 focus:border-orange-700"} w-full cursor-pointer rounded-lg border border-black/40 px-6 py-[19px] text-[0.8750rem] font-bold tracking-[-0.015625rem] caret-orange-700 placeholder:text-black/40 focus:outline-none`}
      {...register}
    />
  );
}
