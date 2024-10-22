export function Label({ children, htmlFor, errors, errorName }) {
  return (
    <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
      <label
        htmlFor={htmlFor}
        className={`${errors[errorName] ? "text-red" : ""} cursor-pointer font-bold`}
      >
        {children}
      </label>
      {errors[errorName] && (
        <p className="text-red">{errors[errorName]?.message}</p>
      )}
    </div>
  );
}
