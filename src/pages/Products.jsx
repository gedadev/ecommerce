import "../styles/Products.css";
import FiltersProvider from "../context/FiltersContext";
import { ProductsContainer } from "../components/Products/ProductsContainer";
import { FiltersSection } from "../components/Products/FiltersSection";

export default function Products() {
  return (
    <main className="products-section">
      <FiltersProvider>
        <FiltersSection />
        <ProductsContainer />
      </FiltersProvider>
    </main>
  );
}
