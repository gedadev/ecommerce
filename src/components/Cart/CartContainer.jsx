import useCart from "../../hooks/useCart";
import { QuantitySelector } from "../Products/QuantitySelector";

export function CartContainer() {
  const { cart } = useCart();

  return (
    <section className="cart-container">
      <h1>My Items</h1>
      <ul>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product) => <CartItem key={product.id} product={product} />)
        )}
      </ul>
    </section>
  );
}

function CartItem({ product }) {
  return (
    <li key={product.id} className="cart-item">
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
      </div>
      <div>
        <p>$ {product.price}</p>
        <QuantitySelector product={product} />
      </div>
      <div className="separator" />
    </li>
  );
}
