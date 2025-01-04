import useProducts from "../hooks/useProducts";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const { featuredProducts } = useProducts();

  return (
    <section className="featured">
      <h2>Top Picks for You</h2>
      <div className="featured-products-container">
        {featuredProducts &&
          featuredProducts.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </section>
  );
}
