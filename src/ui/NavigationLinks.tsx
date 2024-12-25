import { Link } from "react-router-dom";

export function NavigationLinks({ className }) {
  return (
    <nav className={className}>
      <ul className="flex flex-col gap-4 text-xs uppercase tracking-[0.125rem] sm:flex-row sm:gap-[34px]">
        <li>
          <Link to="/" className="transition-colors hover:text-orange-700">
            HOME
          </Link>
        </li>
        <li>
          <Link
            to="/categories/headphones"
            className="transition-colors hover:text-orange-700"
          >
            HEADPHONES
          </Link>
        </li>
        <li>
          <Link
            to="/categories/speakers"
            className="transition-colors hover:text-orange-700"
          >
            SPEAKERS
          </Link>
        </li>
        <li>
          <Link
            to="/categories/earphones"
            className="transition-colors hover:text-orange-700"
          >
            EARPHONES
          </Link>
        </li>
      </ul>
    </nav>
  );
}
