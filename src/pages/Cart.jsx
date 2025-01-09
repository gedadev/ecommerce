import "../styles/Cart.css";
import { CartContainer } from "../components/CartContainer";
import { CartCheckout } from "../components/CartCheckout";

export default function Cart() {
  return (
    <main className="cart-section">
      <CartContainer />
      <CartCheckout />
    </main>
  );
}
