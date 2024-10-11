import { Link } from "react-router-dom";

export function Logo() {
  return (
    <Link to="/" className="inline-block h-[25px] w-[143px] bg-black">
      <img src="/assets/shared/desktop/logo.svg" alt="Audiophile logo" />
    </Link>
  );
}
