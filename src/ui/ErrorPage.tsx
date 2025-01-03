import { Link, useRouteError } from "react-router-dom";

interface ErrorType {
  status: number;
  statusText: string;
  message: string;
}

export function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <div className="mx-auto flex h-screen w-screen flex-col items-center bg-black px-4 pt-10 text-base text-white sm:px-10">
      <div className="grid place-items-center gap-2 pt-20 text-center">
        <h1 className="text-5xl font-bold">{error.status}</h1>
        <h2 className="text-lg font-extrabold">Oops!</h2>
        <p className="md:text-xl">Sorry, an unexpected error has occurred.</p>
        <p className="md:text-xl">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="mt-5 text-[hsl(210,100%,70%)] underline">
          &rarr; Back to Home
        </Link>
      </div>
    </div>
  );
}
