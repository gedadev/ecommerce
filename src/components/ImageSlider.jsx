import { useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function ImageSlider({ images, alt }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const getNextImage = () => {
      setCurrentIndex((index) => {
        if (index === images.length - 1) {
          return 0;
        }
        return index + 1;
      });
    };

    const interval = setInterval(() => {
      getNextImage();
    }, 3500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          src={image}
          alt={alt}
          key={index}
          style={{ translate: `${-100 * currentIndex}%` }}
        />
      ))}
      <div className="image-slider-dots">
        {images.map((_, index) => (
          <GoDotFill
            key={index}
            className={currentIndex === index ? "active" : ""}
            onClick={() => setCurrentIndex(index)}
          ></GoDotFill>
        ))}
      </div>
    </div>
  );
}
