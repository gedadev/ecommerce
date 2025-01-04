import "../styles/Home.css";
import { FeaturedProducts } from "../components/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
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
      <button>Shop Now</button>
    </section>
  );
}
