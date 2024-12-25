import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ButtonLinkProps {
  children: string;
  onClick?: MouseEventHandler;
  color: "orange" | "transparent" | "black";
  width?: string;
  to?: string;
  type?: "button" | "reset" | "submit" | undefined;
}

export function ButtonLink({
  children,
  onClick,
  color,
  width = "160px",
  to,
  type,
}: ButtonLinkProps) {
  const baseStyle = `inline-block py-[15px] text-[0.8125rem] text-center
                     font-bold uppercase tracking-[0.0625rem] transition-colors`;

  const colorStyles = {
    orange: `${baseStyle} text-white bg-orange-700 hover:bg-orange-400`,
    transparent: `${baseStyle} text-black bg-[transparent] border hover:text-white hover:bg-black`,
    black: `${baseStyle} text-white bg-black hover:bg-[#4C4C4C]`,
  };

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={colorStyles[color]}
        style={{ width }}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={colorStyles[color]}
      style={{ width }}
    >
      {children}
    </button>
  );
}
