import "../styles/Detail.css";
import {
  ProductDetailInfo,
  ProductDescription,
  ProductReviews,
} from "../components/Products/DetailSection";

export default function ProductDetail() {
  return (
    <main className="product-detail">
      <ProductDetailInfo />
      <ProductDescription />
      <ProductReviews />
    </main>
  );
}
