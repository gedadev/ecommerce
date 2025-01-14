import { useCallback, useEffect, useState } from "react";
import { GoDotFill } from "react-icons/go";

export default function ImageSlider({ images, alt, action, sliderIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isActive, setIsActive] = useState(action === "auto");

  const getNextImage = useCallback(() => {
    setCurrentIndex((index) => {
      if (index === images.length - 1) {
        return 0;
      }
      return index + 1;
    });
  }, [images]);

  useEffect(() => {
    if (action === "none") {
      setCurrentIndex(sliderIndex);
      return;
    }

    const delay = 2500;

    const slideInterval = setInterval(() => {
      isActive && getNextImage();
    }, delay);

    return () => clearInterval(slideInterval);
  }, [isActive, getNextImage, action, sliderIndex]);

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <img
          src={image}
          alt={alt}
          key={index}
          style={{ translate: `${-100 * currentIndex}%` }}
          onMouseOver={() => action === "hover" && setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
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
