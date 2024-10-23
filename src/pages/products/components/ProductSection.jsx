import { useState } from "react";
import { useCart } from "../../../contexts/CartContext";
import { Link } from "react-router-dom";
import { ButtonLink } from "../../../ui/ButtonLink";

export function ProductSection({ product }) {
  const { addItem } = useCart();
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleIncrementQuantity() {
    setItemQuantity((quantity) => quantity + 1);
  }

  function handleDecrementQuantity() {
    setItemQuantity((quantity) => (quantity > 1 ? quantity - 1 : quantity));
  }

  function handleAddItem() {
    const newItem = {
      id: product.id,
      name: product.name,
      slug: product.slug,
      price: product.price,
      quantity: itemQuantity,
    };

    addItem(newItem);
    setItemQuantity(1);
  }

  return (
    <section className="mt-16 px-6 sm:px-[39px] xl:px-[165px]">
      <Link
        to={`/categories/${product.category}`}
        className="mb-6 inline-block text-base text-black/50 transition-colors hover:text-orange-700 xl:mb-14"
      >
        Go Back
      </Link>
      <div className="sm:flex sm:items-center sm:gap-[69px]">
        <picture className="h-full w-full overflow-hidden rounded-lg sm:mx-auto sm:flex sm:max-h-[560px] sm:max-w-[540px] sm:items-center xl:mx-0">
          <source media="(min-width: 1280px)" srcSet={product.image.desktop} />
          <source media="(min-width: 640px)" srcSet={product.image.tablet} />
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
          <h1 className="max-w-[300px] text-[1.75rem] font-bold uppercase tracking-[0.0625rem] xl:text-4xl">
            {product.name}
          </h1>
          <p className="text-base text-black/50 sm:mx-auto sm:mb-6 sm:mt-8 sm:max-w-[580px] xl:mx-0 xl:mb-10 xl:mt-8 xl:max-w-[450px]">
            {product.description}
          </p>
          <div className="space-y-[31px]">
            <p className="text-lg">${product.price.toLocaleString("en-US")}</p>
            <div className="flex h-12 gap-4">
              <div className="flex w-[120px] items-center justify-between gap-5 bg-gray-100 px-4 py-[15px] text-xs leading-[0.0625rem]">
                <button
                  onClick={handleDecrementQuantity}
                  disabled={itemQuantity === 1}
                  className="h-[18px] w-4 text-black/25 hover:text-orange-700 disabled:cursor-not-allowed disabled:hover:text-black/25"
                >
                  -
                </button>
                <span>{itemQuantity}</span>
                <button
                  onClick={handleIncrementQuantity}
                  className="h-[18px] w-4 text-black/25 hover:text-orange-700"
                >
                  +
                </button>
              </div>
              <ButtonLink onClick={handleAddItem} color="orange" type="button">
                Add To Cart
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
