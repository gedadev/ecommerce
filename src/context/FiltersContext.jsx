import { createContext, useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { formatValue } from "../utils/main";

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const [filters, setFilters] = useState([]);
  const { products } = useProducts({ limit: 100 });
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filtersValues, setFiltersValues] = useState(null);

  useEffect(() => {
    if (filters.length === 0 && products) {
      const category = [
        ...new Set(products.map((product) => product.category)),
      ];
      const brand = [...new Set(products.map((product) => product.brand))];
      setFiltersValues([{ category }, { brand }]);

      return;
    }

    if (filteredProducts) {
      const category = [
        ...new Set(products.map((product) => product.category)),
      ];
      const brand = [
        ...new Set(filteredProducts.map((product) => product.brand)),
      ];
      setFiltersValues([{ category }, { brand }]);
    }
  }, [filteredProducts, products, filters]);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredProducts(products);
      return;
    }

    const filtered = products.filter((product) => {
      return filters.every((filter) => {
        const fieldset = Object.keys(filter)[0];
        const values = filter[fieldset];

        if (!product[fieldset]) {
          return values.includes("other");
        }

        return values.includes(formatValue(product[fieldset]));
      });
    });

    setFilteredProducts(filtered);
  }, [filters, products]);

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

            if (filter[fieldset].length === 0) {
              return null;
            }
          }
          return filter;
        });

        return newFilters.filter((filter) => filter);
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
    <FiltersContext.Provider
      value={{ filters, handleFilters, filteredProducts, filtersValues }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
