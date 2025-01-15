import { useContext } from "react";
import { DetailContext } from "../context/DetailContext";

export default function useDetail() {
  const context = useContext(DetailContext);

  return context;
}
