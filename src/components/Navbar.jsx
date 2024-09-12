import { FaOpencart } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>
        <FaOpencart />
      </h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>Products</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}
