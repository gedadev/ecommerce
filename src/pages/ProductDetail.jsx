import "../styles/Detail.css";
import { ProductDetailInfo } from "../components/ProductDetailInfo";

export default function ProductDetail() {
  return (
    <main className="product-detail">
      <ProductDetailInfo />
      <section className="product-description"></section>
      <section className="product-reviews"></section>
    </main>
  );
}
