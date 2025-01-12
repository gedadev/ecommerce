import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import useCart from "../hooks/useCart";

export function QuantitySelector({ product }) {
  const { incrementQuantity, decreaseQuantity, cart } = useCart();

  const getQuantity = (id) => {
    const foundItem = cart.find((item) => item.id === id);

    if (!foundItem) return 0;

    return foundItem.quantity;
  };

  const handleInput = () => {};

  return (
    <div className="quantity-selector">
      <button onClick={() => decreaseQuantity(product.id)}>
        <FaMinus />
      </button>
      <label htmlFor={`product-${product.id}-quantity`}></label>
      <input
        type="text"
        name={`product-${product.id}-quantity`}
        id={`product-${product.id}-quantity`}
        value={getQuantity(product.id)}
        onChange={handleInput}
      />
      <button onClick={() => incrementQuantity(product.id)}>
        <FaPlus />
      </button>
    </div>
  );
}
