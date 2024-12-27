import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState(null);
  const [filtersValues, setFiltersValues] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        const category = [
          ...new Set(products.map((product) => product.category)),
        ];
        const brand = [...new Set(products.map((product) => product.brand))];

        setFiltersValues([{ category }, { brand }]);
        setProducts(products);
      });
  }, []);

  return { products, filtersValues };
}
