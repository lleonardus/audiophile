import { HeroSection } from "./components/HeroSection";
import { ListOfCategories } from "../../ui/ListOfCategories";
import { MainProductsSection } from "./components/MainProductsSection";

export function Home() {
  return (
    <>
      <HeroSection />
      <section>
        <ListOfCategories className="mt-[92px] sm:mt-[148px] xl:mt-[200px] xl:px-[165px] 2xl:gap-16" />
      </section>
      <MainProductsSection />
    </>
  );
}
