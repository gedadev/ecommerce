import useCart from "../hooks/useCart";

export default function Cart() {
  const { cart } = useCart();

  return <>{console.log(cart)}</>;
}
