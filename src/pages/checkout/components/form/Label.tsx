import { FieldError } from "react-hook-form";

interface LabelProps {
  children: string;
  htmlFor?: string;
  error?: FieldError;
}

export function Label({ children, htmlFor, error }: LabelProps) {
  return (
    <div className="mb-[9px] flex justify-between text-[0.75rem] tracking-[-0.013125rem]">
      <label
        htmlFor={htmlFor}
        className={`${error ? "text-red" : ""} cursor-pointer font-bold`}
      >
        {children}
      </label>
      {error && <p className="text-red">{error?.message}</p>}
    </div>
  );
}
