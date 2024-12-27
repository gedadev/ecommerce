import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;

        setProducts(products);
      });
  }, []);

  return { products };
}
