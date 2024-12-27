import "../styles/Products.css";
import FiltersProvider from "../context/FiltersContext";
import { ProductsContainer } from "../components/ProductsContainer";
import { FiltersSection } from "../components/FiltersSection";

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
