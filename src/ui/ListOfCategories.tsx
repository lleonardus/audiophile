import { MouseEventHandler } from "react";
import { Link } from "react-router-dom";

interface ListOfCategoriesProps {
  className?: string;
  componentRef?: React.LegacyRef<HTMLDivElement>;
  handleLinkClick?: MouseEventHandler;
}

export function ListOfCategories({
  className,
  componentRef,
  handleLinkClick,
}: ListOfCategoriesProps) {
  return (
    <div
      ref={componentRef}
      className={`${className} flex h-fit w-full flex-col gap-[68px] px-6 sm:flex-row sm:justify-between sm:gap-2.5 sm:px-10`}
    >
      <div className="relative rounded-lg bg-gray-100 px-5 pb-[22px] pt-[88px] text-center font-bold uppercase sm:w-full">
        <div className="absolute left-1/2 top-[-52px] w-[143px] -translate-x-1/2">
          <img
            className="h-full w-full"
            src="/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="Headphones"
          />
        </div>
        <h3 className="text-[0.9375rem] tracking-[0.0625rem] text-black">
          headphones
        </h3>
        <Link
          onClick={handleLinkClick}
          to="/categories/headphones"
          className="mx-auto mt-[17px] flex w-min items-center gap-[13.32px] text-[0.8125rem] tracking-[0.0625rem] text-gray-900/50 transition-colors hover:text-orange-700"
        >
          <span>shop</span>
          <img
            className="h-[10px] w-[5px]"
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="Icon arrow right"
          />
        </Link>
      </div>
      <div className="relative rounded-lg bg-gray-100 px-5 pb-[22px] pt-[88px] text-center font-bold uppercase sm:w-full">
        <div className="absolute left-1/2 top-[-52px] w-[143px] -translate-x-1/2">
          <img
            className="h-full w-full"
            src="/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="Speakers"
          />
        </div>
        <h3 className="text-[0.9375rem] tracking-[0.0625rem] text-black">
          speakers
        </h3>
        <Link
          onClick={handleLinkClick}
          to="/categories/speakers"
          className="mx-auto mt-[17px] flex w-min items-center gap-[13.32px] text-[0.8125rem] tracking-[0.0625rem] text-gray-900/50 transition-colors hover:text-orange-700"
        >
          <span>shop</span>
          <img
            className="h-[10px] w-[5px]"
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="Icon arrow right"
          />
        </Link>
      </div>
      <div className="relative rounded-lg bg-gray-100 px-5 pb-[22px] pt-[88px] text-center font-bold uppercase sm:w-full">
        <div className="absolute left-1/2 top-[-52px] w-[143px] -translate-x-1/2">
          <img
            className="h-full w-full"
            src="/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="Earphones"
          />
        </div>
        <h3 className="text-[0.9375rem] tracking-[0.0625rem] text-black">
          earphones
        </h3>
        <Link
          onClick={handleLinkClick}
          to="/categories/earphones"
          className="mx-auto mt-[17px] flex w-min items-center gap-[13.32px] text-[0.8125rem] tracking-[0.0625rem] text-gray-900/50 transition-colors hover:text-orange-700"
        >
          <span>shop</span>
          <img
            className="h-[10px] w-[5px]"
            src="/assets/shared/desktop/icon-arrow-right.svg"
            alt="Icon arrow right"
          />
        </Link>
      </div>
    </div>
  );
}
