import useCart from "../../hooks/useCart";

export function CartCheckout() {
  const { subtotal, shippingCost, total } = useCart();

  return (
    <section className="cart-checkout">
      <h1>Checkout</h1>
      <div className="cart-checkout-container">
        <div>
          <h3>Subtotal</h3>
          <p>${subtotal}</p>
        </div>
        <div>
          <h3>Shipping</h3>
          <p>${shippingCost}</p>
        </div>
        <div>
          <h3>Total</h3>
          <p>${total}</p>
        </div>
        <button>Checkout</button>
      </div>
    </section>
  );
}
