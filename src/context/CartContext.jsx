import { createContext } from "react";

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const cart = [];

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
}
