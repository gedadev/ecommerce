import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import useCart from "../hooks/useCart";
import { useEffect, useState } from "react";

export function QuantitySelector({ product }) {
  const { incrementQuantity, decreaseQuantity, findItemInCart } = useCart();
  const [lastItem, setLastItem] = useState(null);

  useEffect(() => {
    const foundItem = findItemInCart(product.id);

    if (!foundItem) return;

    setLastItem(foundItem.quantity === 1);
  }, [product, findItemInCart]);

  const getQuantity = (id) => {
    const foundItem = findItemInCart(id);

    if (!foundItem) return 0;

    return foundItem.quantity;
  };

  const handleInput = () => {};

  return (
    <div className="quantity-selector">
      <button onClick={() => decreaseQuantity(product.id)}>
        {lastItem ? <FaRegTrashAlt /> : <FaMinus />}
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
