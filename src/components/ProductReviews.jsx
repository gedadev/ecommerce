import { useParams } from "react-router-dom";
import useDetail from "../hooks/useDetail";
import { formatDate } from "../utils/main";
import { RatingStars } from "./RatingStars";

export function ProductReviews() {
  const { id } = useParams();
  const { product } = useDetail({ id });

  return (
    <section className="product-reviews">
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
    </section>
  );
}
