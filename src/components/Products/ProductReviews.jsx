import { useParams } from "react-router-dom";
import useDetail from "../../hooks/useDetail";
import { formatDate } from "../../utils/main";
import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

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

function RatingStars({ length }) {
  return (
    <div>
      {Array.from({ length }, (_, i) => (
        <IconContext.Provider key={i} value={{ color: "rgb(247, 184, 1)" }}>
          <FaStar className="icon" />
        </IconContext.Provider>
      ))}
    </div>
  );
}
