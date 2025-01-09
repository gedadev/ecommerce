export function CartCheckout() {
  return (
    <section className="cart-checkout">
      <h1>Checkout</h1>
      <div className="cart-checkout-container">
        <div>
          <h3>Subtotal</h3>
          <p>$0.00</p>
        </div>
        <div>
          <h3>Shipping</h3>
          <p>$0.00</p>
        </div>
        <div>
          <h3>Total</h3>
          <p>$0.00</p>
        </div>
        <button>Checkout</button>
      </div>
    </section>
  );
}
