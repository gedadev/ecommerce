import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { formatDate } from "../utils/main";
import { RatingStars } from "./RatingStars";

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
        {product &&
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
          ))}
      </div>
    </section>
  );
}
