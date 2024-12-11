import "../styles/Products.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []);

  return (
    <main className="products-section">
      <section className="product-filters"></section>
      <section className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </section>
    </main>
  );
}
