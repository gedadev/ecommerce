import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { QuantitySelector } from "./QuantitySelector";
import useDetail from "../hooks/useDetail";
import { RatingStars } from "./RatingStars";

export function DetailSummary() {
  const { id } = useParams();
  const { product } = useDetail({ id });
  const [itemInCart, setItemInCart] = useState(false);
  const { addToCart, findItemInCart } = useCart();

  useEffect(() => {
    const foundItem = findItemInCart(id);

    setItemInCart(foundItem);
  }, [findItemInCart, id]);

  return (
    <>
      {product && (
        <>
          <div className="summary">
            <div>
              <h2>{product.title}</h2>
              <p>SKU: {product.sku}</p>
              <div className="rating-stars">
                <RatingStars length={Math.round(product.rating)} />
                <p>({product.rating})</p>
              </div>
            </div>
            <span>$ {product.price}</span>
          </div>
          <div className="buy-box">
            <div className="shipping-info">
              <p>{product.shippingInformation}</p>
              <p>
                Dimensions: H({product.dimensions.height}) W(
                {product.dimensions.width}) D({product.dimensions.depth})
              </p>
              <p>Weight: {product.weight}</p>
              <p>{product.returnPolicy}</p>
              <p>{product.warrantyInformation}</p>
            </div>
            <p>
              {product.availabilityStatus} ({product.stock})
            </p>
            {itemInCart ? (
              <QuantitySelector product={product} />
            ) : (
              <button onClick={() => addToCart(product)}>
                <FaShoppingCart className="icon" />
                Add to Cart
              </button>
            )}
          </div>
        </>
      )}
    </>
  );
}
