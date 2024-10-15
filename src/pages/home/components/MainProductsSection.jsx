import { ButtonLink } from "../../../ui/ButtonLink";

export function MainProductsSection() {
  return (
    <section className="mt-[120px] flex flex-col gap-6 px-6 sm:mt-[96px] sm:gap-8 sm:px-[39px] xl:mt-[168px] xl:gap-12 xl:px-[165px]">
      <div className="flex flex-col items-center rounded-lg bg-orange-700 bg-[url('/assets/home/desktop/pattern-circles.svg')] bg-[length:500px_570px] bg-[center_top_-8rem] bg-no-repeat px-6 pb-[55px] pt-[61px] text-center text-white sm:bg-[length:900px_900px] sm:bg-[center_top_-16.825rem] sm:pb-16 xl:flex-row xl:items-start xl:justify-between xl:gap-10 xl:overflow-hidden xl:bg-cover xl:bg-[top_left_-15rem] xl:pb-0 xl:pl-[140px] xl:pr-[65px] xl:pt-[133px] xl:text-left 2xl:justify-center 2xl:gap-[148px]">
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="/assets/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 640px)"
            srcSet="/assets/home/tablet/image-speaker-zx9.png"
          />
          <img
            className="h-[194px] w-[157px] xl:h-[446px] xl:w-[378px] xl:shrink-0 xl:translate-y-3"
            src="/assets/home/mobile/image-speaker-zx9.png"
            alt="Speaker ZX9"
          />
        </picture>
        <div className="flex max-w-[349px] flex-col items-center xl:mt-8 xl:items-start">
          <h2 className="mb-6 mt-[39px] w-min text-[2.25rem] font-bold uppercase leading-[2.5rem] tracking-[0.08125rem] sm:mt-[75px] sm:text-5xl xl:mt-0">
            ZX9 SPEAKER
          </h2>
          <p className="mb-6 text-base sm:mb-10">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <ButtonLink to="/" color="black">
            See product
          </ButtonLink>
        </div>
      </div>
      <div className="space-y-8 rounded-lg bg-gray-100 bg-[url('/assets/home/mobile/image-speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat px-[25.5px] py-[101px] sm:bg-[url('/assets/home/tablet/image-speaker-zx7.jpg')] sm:px-[62px] lg:bg-[url('/assets/home/desktop/image-speaker-zx7.jpg')] xl:px-[95px] 2xl:px-[195px]">
        <h3 className="text-2xl uppercase">ZX7 SPEAKER</h3>
        <ButtonLink to="/" color="transparent">
          See product
        </ButtonLink>
      </div>
      <div className="grid grid-rows-2 gap-6 sm:w-full sm:grid-cols-2 sm:grid-rows-1 sm:gap-[11px]">
        <div
          aria-hidden="true"
          className="h-full w-full rounded-lg bg-black bg-[url('/assets/home/mobile/image-earphones-yx1.jpg')] bg-cover bg-center bg-no-repeat sm:bg-[url('/assets/home/tablet/image-earphones-yx1.jpg')] xl:bg-[url(/assets/home/desktop/image-earphones-yx1.jpg'')]"
        >
          <img
            src="/assets/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones"
            className="sr-only"
          />
        </div>
        <div className="space-y-8 rounded-lg bg-gray-100 px-6 py-[41px] sm:px-[41px] sm:py-[101px] xl:px-[95px] 2xl:py-[110px]">
          <h3 className="text-2xl uppercase">YX1 EARPHONES</h3>
          <ButtonLink to="/" color="transparent">
            See product
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
