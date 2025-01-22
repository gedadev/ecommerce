import { FaOpencart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useState } from "react";

export default function Navbar() {
  const { cart } = useCart();
  const [activeModal, setActiveModal] = useState(false);

  const handleModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <nav className="navbar">
      <Link to={`/`}>
        <h1>
          <FaOpencart />
        </h1>
      </Link>
      <ul className="nav-links">
        <Link to={`products/`}>
          <li>Shop Now</li>
        </Link>
        <div className="login-link">
          <li onClick={handleModal}>Login</li>
          {activeModal && <LoginModal />}
        </div>
        <Link to={`cart/`}>
          <li className="cart-icon">
            <TiShoppingCart style={{ fontSize: "1.3rem" }} />
            <span>
              {cart.reduce((count, item) => count + item.quantity, 0)}
            </span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

function LoginModal() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login-modal">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button>Login</button>
      </form>
    </div>
  );
}
