import { useEffect, useState } from "react";
import useProducts from "./useProducts";

export default function useDetail({ id }) {
  const [product, setProduct] = useState(null);
  const { findProduct } = useProducts({});

  useEffect(() => {
    setProduct(() => findProduct(id));
  }, [findProduct, id]);

  return { product };
}
