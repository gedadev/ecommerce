import { useParams } from "react-router-dom";
import useDetail from "../../hooks/useDetail";
import { formatDate } from "../../utils/main";
import { DetailGraphics } from "./DetailGraphics";
import { DetailSummary } from "./DetailSummary";
import { RatingStars } from "./RatingStars";

export function ProductDetailInfo() {
  return (
    <section className="product-info">
      <DetailGraphics />
      <DetailSummary />
    </section>
  );
}

export function ProductDescription() {
  const { id } = useParams();
  const { product } = useDetail({ id });

  return (
    <section className="product-description">
      <h2>Description</h2>
      {product && <p>{product.description}</p>}
    </section>
  );
}

export function ProductReviews() {
  const { id } = useParams();
  const { product } = useDetail({ id });

  return (
    <section className="product-reviews">
      <div className="rating">
        <h2>Customer reviews</h2>
        {product && (
          <div>
            <RatingStars length={Math.round(product.rating)} />
            <p>{product.rating}</p>
          </div>
        )}
      </div>
      <div className="reviews">
        {product && product.reviews.length > 0 ? (
          product.reviews.map((review, i) => (
            <div key={i}>
              <h3>{review.reviewerName}</h3>
              <span>
                Reviewed on {formatDate(review.date).date},{" "}
                {formatDate(review.date).time}
              </span>
              <RatingStars length={review.rating} />
              <p>{review.comment}</p>
            </div>
          ))
        ) : (
          <p>No reviews, Soyez le premier</p>
        )}
      </div>
    </section>
  );
}
