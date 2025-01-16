import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";

export function ProductDescription() {
  const { id } = useParams();
  const { product } = useDetail({ id });

  return (
    <section className="product-description">
      <h2>Description</h2>
      {product && <p>{product.description}</p>}
    </section>
  );
}
