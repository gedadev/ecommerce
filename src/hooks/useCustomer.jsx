import { useContext } from "react";
import { CustomerContext } from "../context/CustomerContext";

export default function useCustomer() {
  const context = useContext(CustomerContext);

  return context;
}
