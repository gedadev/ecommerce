import { useEffect, useState } from "react";

export default function useProducts() {
  const [products, setProducts] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=50")
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        const sortedByRating = products.toSorted((a, b) => b.rating - a.rating);

        setProducts(products);
        setFeaturedProducts(sortedByRating.slice(0, 5));
      });
  }, []);

  return { products, featuredProducts };
}
