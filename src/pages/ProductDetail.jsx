import "../styles/Detail.css";
import { ProductDetailInfo } from "../components/ProductDetailInfo";
import { ProductDescription } from "../components/ProductDescription";

export default function ProductDetail() {
  return (
    <main className="product-detail">
      <ProductDetailInfo />
      <ProductDescription />
      <section className="product-reviews"></section>
    </main>
  );
}
