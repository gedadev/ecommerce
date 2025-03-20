import { FaOpencart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";
import { useState } from "react";
import { LoginModal } from "./LoginModal";
import useCustomer from "../hooks/useCustomer";

export default function Navbar() {
  const { cart } = useCart();
  const [activeModal, setActiveModal] = useState(false);
  const { isLoggedIn } = useCustomer();

  const handleModal = () => {
    setActiveModal(!activeModal);
  };

  return (
    <nav className="navbar">
      <Link to={`/`}>
        <h1 onClick={handleModal}>
          <FaOpencart />
        </h1>
      </Link>
      <ul className="nav-links">
        <Link to={`products/`}>
          <li onClick={handleModal}>Shop Now</li>
        </Link>
        <div className="login-link">
          <li onClick={handleModal}>{isLoggedIn ? "Profile" : "Login"}</li>
          {activeModal && <LoginModal handleModal={handleModal} />}
        </div>
        <Link to={`cart/`}>
          <li className="cart-icon" onClick={handleModal}>
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
