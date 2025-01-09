import "../styles/Cart.css";
import { CartContainer } from "../components/CartContainer";

export default function Cart() {
  return (
    <main className="cart-section">
      <CartContainer />
      <section className="cart-checkout"></section>
    </main>
  );
}
