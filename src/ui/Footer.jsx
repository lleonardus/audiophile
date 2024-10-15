import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import { IconFacebook } from "./icons/IconFacebook";
import { IconTwitter } from "./icons/IconTwitter";
import { IconInstagram } from "./icons/IconInstagram";

export function Footer() {
  return (
    <footer className="mt-[120px] bg-gray-900 text-center text-white sm:mt-[96px] sm:text-left xl:mt-[200px]">
      <div className="flex flex-col items-center px-6 sm:items-start sm:px-[39px] xl:px-[165px]">
        <div className="relative flex flex-col items-center gap-14 pt-14 before:absolute before:left-1/2 before:top-0 before:h-1 before:w-[101px] before:-translate-x-1/2 before:bg-orange-700 sm:items-start sm:gap-8 sm:before:left-0 sm:before:translate-x-0 xl:w-full xl:flex-row xl:justify-between">
          <Logo />
          <NavigationLinks />
        </div>
        <div className="mb-14 mt-14 flex flex-col items-center gap-y-14 text-base text-white/50 sm:mt-8 sm:grid sm:w-full sm:grid-cols-2 sm:grid-rows-2 sm:items-start sm:gap-y-20 sm:space-y-0">
          <p className="sm:col-span-2 sm:max-w-[740px] xl:col-span-1 xl:max-w-[540px]">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we’re open 7 days a week.
          </p>
          <p className="font-bold xl:row-start-2">
            Copyright 2021. All Rights Reserved
          </p>
          <div className="flex w-min flex-row items-center gap-4 sm:justify-self-end xl:col-span-1 xl:row-span-1 xl:self-end">
            <Link
              to="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-orange-700"
            >
              <IconFacebook />
            </Link>
            <Link
              to="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-orange-700"
            >
              <IconTwitter />
            </Link>
            <Link
              to="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-orange-700"
            >
              <IconInstagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
