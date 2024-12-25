export function AboutUsSection() {
  return (
    <section className="grid grid-rows-2 gap-10 px-6 sm:px-[39px] xl:grid-cols-2 xl:grid-rows-1 xl:items-center xl:gap-[125px] xl:px-[165px]">
      <div
        aria-hidden="true"
        className="rounded-lg bg-[url('/assets/shared/mobile/image-best-gear.jpg')] bg-cover bg-center pt-[300px] sm:bg-[url('/assets/shared/tablet/image-best-gear.jpg')] sm:pt-[300px] xl:bg-[url('/assets/shared/desktop/image-best-gear.jpg')] xl:bg-top xl:pt-[588px]"
      >
        <img
          className="sr-only"
          src="/assets/shared/mobile/image-best-gear.jpg"
          alt="Man listening to music"
        />
      </div>
      <div className="space-y-8 text-center sm:mx-auto sm:max-w-[750px] sm:px-[58px] xl:row-start-1 xl:max-w-[450px] xl:px-0 xl:text-left">
        <h2 className="text-[1.75rem] font-bold uppercase tracking-[0.0625rem] sm:text-4xl">
          BRINGING YOU THE
          <span className="text-orange-700"> BEST </span>
          AUDIO GEAR
        </h2>
        <p className="text-base text-black/50">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
}
