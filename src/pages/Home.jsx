import "../styles/Home.css";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import data from "../mocks/products.json";

export default function Home() {
  const [products, setProducts] = useState(data.products);

  return (
    <main>
      {console.log(products)}
      <section className="hero">
        <h1>Welcome to React Store</h1>
        <p>
          Discover our amazing products and enjoy a seamless shopping
          experience.
        </p>
        <button>Shop Now</button>
      </section>
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-products-container">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
