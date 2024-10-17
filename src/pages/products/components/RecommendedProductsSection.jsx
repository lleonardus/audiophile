import { ButtonLink } from "../../../ui/ButtonLink";

export function RecommendedProductsSection({ product }) {
  return (
    <section className="my-[120px] px-6 sm:px-[39px] xl:my-40 xl:px-[165px]">
      <h2 className="text-[1.5rem] text-xl uppercase leading-9 tracking-[0.05375rem] sm:text-center sm:text-3xl">
        You May Also Like
      </h2>
      <div className="mt-10 flex flex-col gap-[56px] sm:flex-row sm:gap-[11px] xl:gap-[30px]">
        {product.others.map((recommendedProduct) => {
          return (
            <div key={recommendedProduct.slug}>
              <picture className="flex">
                <source
                  media="(min-width: 1280px)"
                  srcSet={recommendedProduct.image.desktop}
                />
                <source
                  media="(min-width: 640px)"
                  srcSet={recommendedProduct.image.tablet}
                />
                <img
                  src={recommendedProduct.image.mobile}
                  alt=""
                  className="rounded-lg sm:h-full sm:w-full"
                />
              </picture>
              <div className="mt-8 flex flex-col items-center gap-8">
                <h2 className="text-xl">{recommendedProduct.name}</h2>
                <ButtonLink
                  to={`/products/${recommendedProduct.slug}`}
                  color="orange"
                >
                  See Product
                </ButtonLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
