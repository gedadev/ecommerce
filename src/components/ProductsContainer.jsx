import useFilters from "../hooks/useFilters";
import { ProductCard } from "./ProductCard";

export function ProductsContainer() {
  const { filteredProducts } = useFilters();

  return (
    <section className="products-container">
      {filteredProducts &&
        filteredProducts.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
    </section>
  );
}
