import "../styles/Home.css";
import { FeaturedProducts } from "../components/FeaturedProducts";
import { Link } from "react-router-dom";
import { CategoriesSection } from "../components/CategoriesSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <CategoriesSection />
      <FeaturedProducts />
    </main>
  );
}

function Hero() {
  return (
    <section className="hero">
      <h1>Welcome to React Store</h1>
      <p>
        Discover our amazing products and enjoy a seamless shopping experience.
      </p>
      <Link to={`products/`}>
        <button>Shop Now</button>
      </Link>
    </section>
  );
}
