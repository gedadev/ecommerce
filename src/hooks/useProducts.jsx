import { useEffect, useState } from "react";

export default function useProducts({ limit = 50, quantity = 5 }) {
  const [products, setProducts] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        const sortedByRating = products.toSorted((a, b) => b.rating - a.rating);

        setProducts(products);
        setFeaturedProducts(sortedByRating.slice(0, quantity));
      });
  }, [limit, quantity]);

  return { products, featuredProducts };
}
