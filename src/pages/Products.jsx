import "../styles/Products.css";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { Filter } from "../components/Filter";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [filtersValues, setFiltersValues] = useState(null);
  const [filters, setFilters] = useState([]);

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

  const handleFilters = ({ fieldset, name, checked }) => {
    setFilters((prevFilters) => {
      const foundFilter = prevFilters.find(
        (filter) => Object.keys(filter)[0] === fieldset
      );

      if (!foundFilter) {
        return [...prevFilters, { [fieldset]: [name] }];
      }

      if (!checked) {
        const newFilters = prevFilters.map((filter) => {
          if (Object.keys(filter)[0] === fieldset) {
            filter[fieldset] = filter[fieldset].filter(
              (value) => value !== name
            );
          }
          return filter;
        });

        return newFilters;
      }
      const newFilters = prevFilters.map((filter) => {
        if (Object.keys(filter)[0] === fieldset) {
          filter[fieldset].push(name);
        }
        return filter;
      });

      return newFilters;
    });
  };

  return (
    <main className="products-section">
      <section className="product-filters">
        {filtersValues &&
          filtersValues.map((values, index) => (
            <Filter
              key={index}
              values={values}
              filters={filters}
              handleFilters={handleFilters}
            />
          ))}
      </section>
      <section className="products-container">
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </section>
    </main>
  );
}
