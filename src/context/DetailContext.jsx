import { createContext } from "react";
import useProducts from "../hooks/useProducts";

export const DetailContext = createContext();

export default function DetailProvider({ children }) {
  const { products } = useProducts({ limit: 100 });

  const findProduct = (id) =>
    products && products.find((product) => Number(product.id) === Number(id));

  return (
    <DetailContext.Provider value={{ findProduct }}>
      {children}
    </DetailContext.Provider>
  );
}
