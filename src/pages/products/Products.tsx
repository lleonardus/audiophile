import { useParams } from "react-router-dom";
import products from "../../products.json";
import { ProductSection } from "./components/ProductSection";
import { ProductInfoSection } from "./components/ProductInfoSection";
import { ListOfCategories } from "../../ui/ListOfCategories";
import { AboutUsSection } from "../../ui/AboutUsSection";
import { RecommendedProductsSection } from "./components/RecommendedProductsSection";

export function Products() {
  const { productSlug } = useParams();
  const product = products.find((product) => product.slug === productSlug);

  if (!product) {
    throw new Response(null, { status: 404, statusText: "Product not found" });
  }

  return (
    <>
      <ProductSection product={product} />
      <ProductInfoSection product={product} />
      <RecommendedProductsSection product={product} />
      <section className="my-[120px] px-6 sm:px-[39px] xl:my-40 xl:px-[165px]">
        <ListOfCategories />
      </section>
      <AboutUsSection />
    </>
  );
}
