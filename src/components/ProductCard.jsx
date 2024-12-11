import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <div className="image-card">
        <img src={product.images[0]} alt={product.brand} />
        <span>
          {product.availabilityStatus}: Only {product.stock} left
        </span>
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
        <button>
          <FaShoppingCart className="icon" />
          Add to Cart
        </button>
      </div>
    </article>
  );
}
