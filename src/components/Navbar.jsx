import { FaOpencart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useState } from "react";
import { LoginModal } from "./LoginModal";

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
