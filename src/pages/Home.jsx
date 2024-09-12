import "../styles/Home.css";
import { FaStar } from "react-icons/fa";
import { IconContext } from "react-icons";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <h1>Welcome to React Store</h1>
        <p>
          Discover our amazing products and enjoy a seamless shopping
          experience.
        </p>
        <button>Shop Now</button>
      </section>
      <section className="featured">
        <h2>Featured Products</h2>
        <div className="featured-products-container">
          <article className="product-card">
            <div className="image-card">
              <img src="" alt="" />
              <span>Low stock: Only 5 left</span>
            </div>
            <div className="product-card-content">
              <h3>Product Name</h3>
              <div className="product-value">
                <p className="product-price">$99.99</p>
                <p>
                  <IconContext.Provider value={{ color: "rgb(247, 184, 1)" }}>
                    <FaStar className="icon" />
                  </IconContext.Provider>
                  4.5
                </p>
              </div>
              <button>
                <FaShoppingCart className="icon" />
                Add to Cart
              </button>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
