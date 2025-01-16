import { createContext, useCallback, useEffect, useState } from "react";
import useProducts from "../hooks/useProducts";
import { formatValue } from "../utils/main";

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const { products, categories, brands } = useProducts({ limit: 100 });

  const [filters, setFilters] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filtersValues, setFiltersValues] = useState(null);
  const [orderedBy, setOrderedBy] = useState(null);
  const [productsPerPage, setProductsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (filters.length === 0 && products) {
      const category = categories;
      const brand = brands;
      setFiltersValues([{ category }, { brand }]);

      return;
    }

    if (filteredProducts) {
      const category = categories;
      const brand = [
        ...new Set(filteredProducts.map((product) => product.brand)),
      ];
      setFiltersValues([{ category }, { brand }]);
    }
  }, [filteredProducts, products, filters, categories, brands]);

  useEffect(() => {
    if (filters.length === 0) {
      setFilteredProducts(products);
      return;
    }

    if (!products) return;

    const filtered = products.filter((product) =>
      filters.every((filter) => {
        const fieldset = Object.keys(filter)[0];
        const values = filter[fieldset];

        if (!product[fieldset]) {
          return values.includes("other");
        }

        return values.includes(formatValue(product[fieldset]));
      })
    );

    setFilteredProducts(filtered);
  }, [filters, products]);

  useEffect(() => {
    if (!filteredProducts) {
      return;
    }

    switch (orderedBy) {
      case "price-up":
        setFilteredProducts((prevProducts) =>
          prevProducts.toSorted((a, b) => a.price - b.price)
        );
        break;
      case "price-down":
        setFilteredProducts((prevProducts) =>
          prevProducts.toSorted((a, b) => b.price - a.price)
        );
        break;
      case "rating":
        setFilteredProducts((prevProducts) =>
          prevProducts.toSorted((a, b) => b.rating - a.rating)
        );
        break;
      default:
        setFilteredProducts((prevProducts) =>
          prevProducts.toSorted((a, b) => a.id - b.id)
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orderedBy]);

  useEffect(() => {
    if (!filteredProducts) {
      return;
    }

    setTotalPages(Math.ceil(filteredProducts.length / productsPerPage));
  }, [filteredProducts, productsPerPage]);

  const handleFilters = useCallback(({ fieldset, name, checked }) => {
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
  }, []);

  const handleOrderBy = (value) => {
    setOrderedBy(value === "" ? null : value);
  };

  const resetFilters = () => {
    setFilters([]);
  };

  const handleProductsPerPage = (value) => {
    setProductsPerPage(value);
  };

  const handleCurrentPage = (page) => {
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
  };

  return (
    <FiltersContext.Provider
      value={{
        filters,
        handleFilters,
        filteredProducts,
        filtersValues,
        handleOrderBy,
        resetFilters,
        productsPerPage,
        handleProductsPerPage,
        currentPage,
        handleCurrentPage,
        totalPages,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
