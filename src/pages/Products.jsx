import "../styles/Products.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Filter } from "../components/Filter";
import FiltersProvider from "../context/FiltersContext";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [filtersValues, setFiltersValues] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        const categories = [
          ...new Set(products.map((product) => product.category)),
        ];
        const brand = [...new Set(products.map((product) => product.brand))];

        setFiltersValues([{ categories }, { brand }]);
        setProducts(products);
      });
  }, []);

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
