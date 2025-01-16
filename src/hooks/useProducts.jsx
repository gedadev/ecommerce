import { useEffect, useState } from "react";

export default function useProducts({ limit = 50, quantity = 5 }) {
  const [products, setProducts] = useState(null);
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [categories, setCategories] = useState(null);
  const [brands, setBrands] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        const products = data.products;
        const sortedByRating = products.toSorted((a, b) => b.rating - a.rating);
        const categories = [
          ...new Set(products.map((product) => product.category)),
        ];
        const brands = [...new Set(products.map((product) => product.brand))];

        setProducts(products);
        setFeaturedProducts(sortedByRating.slice(0, quantity));
        setCategories(categories);
        setBrands(brands);
      });
  }, [limit, quantity]);

  const findProduct = (id) =>
    products && products.find((product) => Number(product.id) === Number(id));

  return { products, featuredProducts, findProduct, categories, brands };
}
