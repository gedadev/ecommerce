import "../styles/Home.css";
import { Hero } from "../components/Home/Hero";
import { CategoriesSection } from "../components/Home/CategoriesSection";
import { FeaturedProducts } from "../components/Home/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
    </main>
  );
}
