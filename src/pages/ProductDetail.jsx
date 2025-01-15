import "../styles/Detail.css";
import DetailProvider from "../context/DetailContext";
import { ProductDetailInfo } from "../components/ProductDetailInfo";

export default function ProductDetail() {
  return (
    <DetailProvider>
      <main className="product-detail">
        <ProductDetailInfo />
        <section className="product-description"></section>
        <section className="product-reviews"></section>
      </main>
    </DetailProvider>
  );
}
