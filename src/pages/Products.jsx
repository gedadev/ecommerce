import "../styles/Products.css";
import { Filter } from "../components/Filter";
import FiltersProvider from "../context/FiltersContext";
import useProducts from "../hooks/useProducts";
import { ProductsContainer } from "../components/ProductsContainer";

export default function Products() {
  const { filtersValues } = useProducts();

  return (
    <main className="products-section">
      <FiltersProvider>
        <section className="product-filters">
          {filtersValues &&
            filtersValues.map((values, index) => (
              <Filter key={index} values={values} />
            ))}
        </section>
        <ProductsContainer />
      </FiltersProvider>
    </main>
  );
}
