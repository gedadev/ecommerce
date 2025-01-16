import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProducts from "../hooks/useProducts";

export function ProductDescription() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { findProduct } = useProducts({ limit: 100 });

  useEffect(() => {
    setProduct(() => findProduct(id));
  }, [findProduct, id]);

  return (
    <section className="product-description">
      <h2>Description</h2>
      {product && <p>{product.description}</p>}
    </section>
  );
}
