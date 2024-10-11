import { Link } from "react-router-dom";

export function ButtonLink({ children, color, width = "160px", to, type }) {
  const baseStyle = `inline-block py-[15px] text-[0.8125rem] text-center
                     font-bold uppercase tracking-[0.0625rem] transition-colors`;

  const colorStyles = {
    orange: `${baseStyle} text-white bg-orange-700 hover:bg-orange-400`,
    white: `${baseStyle} text-black bg-white border hover:text-white hover:bg-black`,
    black: `${baseStyle} text-white bg-black border hover:text-black hover:bg-white`,
  };

  if (to) {
    return (
      <Link to={to} className={colorStyles[color]} style={{ width }}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={colorStyles[color]} style={{ width }}>
      {children}
    </button>
  );
}
