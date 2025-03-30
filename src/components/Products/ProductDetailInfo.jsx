import { DetailGraphics } from "./DetailGraphics";
import { DetailSummary } from "./DetailSummary";

export function ProductDetailInfo() {
  return (
    <section className="product-info">
      <DetailGraphics />
      <DetailSummary />
    </section>
  );
}
