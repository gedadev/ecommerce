import { createContext, useState } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const foundItem = prevCart.find((item) => item.id === product.id);

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

  const decreaseQuantity = () => {
    console.log("less");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, incrementQuantity, decreaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}
