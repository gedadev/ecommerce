import "../styles/Cart.css";
import { CartContainer } from "../components/Cart/CartContainer";
import { CartCheckout } from "../components/Cart/CartCheckout";

export default function Cart() {
  return (
    <main className="cart-section">
      <CartContainer />
      <CartCheckout />
    </main>
  );
}
