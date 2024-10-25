import { ButtonLink } from "../../../ui/ButtonLink";
export function HeroSection() {
  return (
    <section className="flex flex-col items-center bg-[#191919] bg-[url('/assets/home/mobile/image-header.jpg')] bg-[length:385px_633.6px] bg-[center_bottom_-1rem] bg-no-repeat px-6 pb-[112px] pt-[108px] text-center text-white sm:w-full sm:bg-[url('/assets/home/tablet/image-header.jpg')] sm:bg-[length:780px_710px] sm:bg-bottom sm:px-[195px] sm:pb-[167px] sm:pt-[126px] xl:items-start xl:bg-[url('/assets/home/desktop/image-hero.jpg')] xl:bg-contain xl:bg-center xl:pb-[158px] xl:pl-[165px] xl:pt-[128px] xl:text-left">
      <div className="max-w-[379px]">
        <p className="mb-4 text-sm uppercase text-white/50 sm:mb-6">
          New Product
        </p>
        <h1 className="mb-6 text-[2.25rem] font-bold uppercase leading-[2.5rem] tracking-[0.08125rem] sm:text-5xl">
          XX99 Mark II Headphones
        </h1>
        <p className="mb-[28px] text-base text-white/75 sm:mb-10 lg:max-w-[349px]">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <ButtonLink to="/products/xx99-mark-two-headphones" color="orange">
          See product
        </ButtonLink>
      </div>
    </section>
  );
}
