import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";
import { ProductDetailInfo } from "../components/ProductDetailInfo";
import "../styles/Detail.css";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { products } = useProducts({ limit: 100 });

  useEffect(() => {
    if (!products) {
      return;
    }

    setProduct(() => {
      const foundProduct = products.find(
        (product) => Number(product.id) === Number(id)
      );

      if (!foundProduct) return null;

      return foundProduct;
    });
  }, [id, products]);

  return (
    <main className="product-detail">
      <ProductDetailInfo product={product} />
      <section className="product-description"></section>
      <section className="product-reviews"></section>
    </main>
  );
}
