import { IconContext } from "react-icons";
import { FaStar } from "react-icons/fa";

export function RatingStars({ length }) {
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
