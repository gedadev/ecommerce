import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export function QuantitySelector({ product }) {
  return (
    <div className="quantity-selector">
      <button>
        <FaMinus />
      </button>
      <label htmlFor={`product-${product.id}-quantity`}></label>
      <input
        type="text"
        name={`product-${product.id}-quantity`}
        id={`product-${product.id}-quantity`}
      />
      <button>
        <FaPlus />
      </button>
    </div>
  );
}
