import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import useCart from "../hooks/useCart";

export function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <article className="product-card">
      <div className="image-card">
        <ImageSlider
          images={product.images}
          alt={product.brand}
          action="hover"
        />
        {product.stock < 10 && (
          <span>Low Stock: Only {product.stock} left</span>
        )}
      </div>
      <div className="product-card-content">
        <h3>{product.title}</h3>
        <div className="product-value">
          <p className="product-price">${product.price}</p>
          <p>
            <IconContext.Provider value={{ color: "rgb(247, 184, 1)" }}>
              <FaStar className="icon" />
            </IconContext.Provider>
            {product.rating}
          </p>
        </div>
        <button onClick={() => addToCart(product)}>
          <FaShoppingCart className="icon" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
