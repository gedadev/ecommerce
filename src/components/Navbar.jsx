import { FaOpencart } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Link } from "react-router-dom";

export default function Navbar() {
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
        <Link to={`login/`}>
          <li>Sign In</li>
        </Link>
        <Link to={`cart/`}>
          <li className="cart-icon">
            <TiShoppingCart style={{ fontSize: "1.3rem" }} />
          </li>
        </Link>
      </ul>
    </nav>
  );
}
