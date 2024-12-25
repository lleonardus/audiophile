import { Product } from "../../../types/Product";

export function ProductInfoSection({ product }: { product: Product }) {
  return (
    <section className="mt-[88px] space-y-[88px] px-4 sm:space-y-[120px] sm:px-[39px] xl:space-y-[160px] xl:px-[165px]">
      <div className="flex flex-col gap-[88px] xl:flex-row xl:gap-[120px]">
        <div className="flex flex-col gap-6 xl:gap-8">
          <h2 className="text-[1.5rem] text-xl uppercase leading-9 tracking-[0.05375rem] sm:text-3xl">
            Features
          </h2>
          <div className="space-y-10">
            {product.features.split("\n\n").map((feature, id) => (
              <p
                key={id}
                className="text-base text-black/50 sm:max-w-[750px] xl:max-w-[1400px]"
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 sm:flex-row sm:gap-[171px] xl:w-full xl:flex-col xl:gap-8">
          <h2 className="text-[1.5rem] text-xl uppercase leading-9 tracking-[0.05375rem] sm:text-3xl">
            In The Box
          </h2>
          <ul className="flex flex-col gap-2">
            {product.includes.map((x, id) => {
              return (
                <li key={id} className="flex gap-[21px] text-base">
                  <span className="font-bold text-orange-700">
                    {x.quantity}x
                  </span>
                  <span className="text-black/50">{x.item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="grid gap-y-5 sm:grid-cols-2 sm:gap-x-[18px]">
        {Object.values(product.gallery).map((img, id) => {
          return (
            <picture
              key={id}
              className={` ${id === 2 ? "sm:col-start-2 sm:row-span-2 sm:row-start-1" : ""}`}
            >
              <source media="(min-width: 1280px)" srcSet={img.desktop} />
              <source media="(min-width: 640px)" srcSet={img.tablet} />
              <img
                src={img.mobile}
                alt=""
                className="rounded-lg sm:h-full sm:w-full"
              />
            </picture>
          );
        })}
      </div>
    </section>
  );
}
