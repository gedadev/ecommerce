import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function useCart() {
  const context = useContext(CartContext);

  return context;
}
