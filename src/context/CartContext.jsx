import { createContext, useCallback, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setSubtotal(() => {
      const sum = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      return sum.toFixed(2);
    });

    setShippingCost((0).toFixed(2));
  }, [cart]);

  useEffect(() => {
    setTotal(() => {
      const sum = Number(subtotal) + Number(shippingCost);

      return sum.toFixed(2);
    });
  }, [subtotal, shippingCost]);

  const findItemInCart = useCallback(
    (id) => cart.find((item) => item.id === id),
    [cart]
  );

  const addToCart = (product) => {
    setCart((prevCart) => {
      const foundItem = findItemInCart(product.id);

      if (foundItem) {
        return prevCart;
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const incrementQuantity = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.quantity = newItem.quantity + 1;
        }

        return newItem;
      });

      return newCart;
    });
  };

  const decreaseQuantity = (id) => {
    setCart((prevCart) => {
      const newCart = prevCart.map((item) => {
        const newItem = { ...item };
        if (newItem.id === id) {
          newItem.quantity = newItem.quantity - 1;
        }

        if (newItem.quantity < 1) {
          return;
        }

        return newItem;
      });

      return newCart.filter(Boolean);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        incrementQuantity,
        decreaseQuantity,
        findItemInCart,
        subtotal,
        shippingCost,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
