import { FaOpencart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <FaOpencart />
      </h1>
      <ul className="nav-links">
        <Link to={`/`}>
          <li>Home</li>
        </Link>
        <Link to={`products/`}>
          <li>Products</li>
        </Link>
        <Link to={`contact/`}>
          <li>Contact</li>
        </Link>
      </ul>
    </nav>
  );
}
