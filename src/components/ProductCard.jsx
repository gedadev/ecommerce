import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";
import ImageSlider from "./ImageSlider";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";
import { QuantitySelector } from "./QuantitySelector";
import { Link } from "react-router-dom";

export function ProductCard({ product }) {
  const { addToCart, findItemInCart } = useCart();
  const [itemInCart, setItemInCart] = useState(false);

  useEffect(() => {
    const foundItem = findItemInCart(product.id);

    setItemInCart(foundItem ? true : false);
  }, [product, findItemInCart]);

  return (
    <Link to={`/${product.id}`}>
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
          {itemInCart ? (
            <QuantitySelector product={product} />
          ) : (
            <button onClick={() => addToCart(product)}>
              <FaShoppingCart className="icon" />
              Add to Cart
            </button>
          )}
        </div>
      </article>
    </Link>
  );
}
