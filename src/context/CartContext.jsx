import { createContext, useCallback, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
