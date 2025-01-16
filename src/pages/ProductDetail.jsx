import "../styles/Detail.css";
import { ProductDetailInfo } from "../components/ProductDetailInfo";
import { ProductDescription } from "../components/ProductDescription";
import { ProductReviews } from "../components/ProductReviews";

export default function ProductDetail() {
  return (
    <main className="product-detail">
      <ProductDetailInfo />
      <ProductDescription />
      <ProductReviews />
    </main>
  );
}
