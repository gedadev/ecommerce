import "../styles/Products.css";
import ProductCard from "../components/ProductCard";
import { Filter } from "../components/Filter";
import FiltersProvider from "../context/FiltersContext";
import useProducts from "../hooks/useProducts";

export default function Products() {
  const { products, filtersValues } = useProducts();

  return (
    <main className="products-section">
      <FiltersProvider>
        <section className="product-filters">
          {filtersValues &&
            filtersValues.map((values, index) => (
              <Filter key={index} values={values} />
            ))}
        </section>
        <section className="products-container">
          {products &&
            products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </section>
      </FiltersProvider>
    </main>
  );
}
