import "../styles/Home.css";
import { Hero } from "../components/Hero";
import { CategoriesSection } from "../components/CategoriesSection";
import { FeaturedProducts } from "../components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
    </main>
  );
}
