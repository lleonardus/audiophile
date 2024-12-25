import { useParams } from "react-router-dom";
import products from "../../products.json";
import { ListOfCategories } from "../../ui/ListOfCategories";
import { AboutUsSection } from "../../ui/AboutUsSection";
import { ButtonLink } from "../../ui/ButtonLink";

const categories = Array.from(
  new Set(products.map((product) => product.category)),
);

export function Categories() {
  const { category } = useParams();

  if (category && !categories.includes(category)) {
    throw new Response(null, { status: 404, statusText: "Category not found" });
  }

  const listOfProducts = products
    .filter((product) => product.category === category)
    .sort((a, b) => b.id - a.id);

  return (
    <>
      <section className="bg-black py-8 text-center uppercase text-white sm:pb-[97px] sm:pt-[105px] xl:py-[98px]">
        <h1 className="text-2xl sm:text-4xl">{category}</h1>
      </section>
      <section className="mt-16 px-6 text-center sm:px-[39px] xl:px-[165px] xl:text-left">
        <ul className="flex flex-col gap-[120px] xl:gap-40">
          {listOfProducts.map((product, id) => {
            return (
              <li
                key={product.name}
                className={`flex flex-col xl:items-center xl:gap-[125px] ${id % 2 === 0 ? "xl:flex-row" : "xl:flex-row-reverse"}`}
              >
                <picture className="h-full w-full overflow-hidden rounded-lg sm:mx-auto sm:flex sm:max-h-[560px] sm:max-w-[540px] sm:items-center xl:mx-0">
                  <source
                    media="(min-width: 1280px)"
                    srcSet={product.image.desktop}
                  />
                  <source
                    media="(min-width: 640px)"
                    srcSet={product.image.tablet}
                  />
                  <img
                    className="rounded-lg bg-gray-100 sm:h-full sm:w-full"
                    src={product.image.mobile}
                    alt={product.slug}
                  />
                </picture>
                <div className="mt-8 space-y-6 sm:mt-[52px] xl:mt-0">
                  {product.new && (
                    <p className="mb-4 text-sm uppercase text-orange-700 sm:mb-6">
                      New Product
                    </p>
                  )}
                  <h2 className="mx-auto max-w-[300px] text-[1.75rem] font-bold uppercase tracking-[0.0625rem] xl:mx-0">
                    {product.name}
                  </h2>
                  <p className="text-base text-black/50 sm:mx-auto sm:mb-6 sm:mt-8 sm:max-w-[580px] xl:mx-0 xl:mb-10 xl:mt-8">
                    {product.description}
                  </p>
                  <ButtonLink to={`/products/${product.slug}`} color="orange">
                    See Product
                  </ButtonLink>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="my-[120px] px-6 sm:px-[39px] xl:my-40 xl:px-[165px]">
        <ListOfCategories />
      </section>
      <AboutUsSection />
    </>
  );
}
