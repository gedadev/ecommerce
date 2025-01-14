import { useState } from "react";
import ImageSlider from "../components/ImageSlider";

export function ProductDetailInfo({ product }) {
  return (
    <>
      {product && (
        <section className="product-info">
          <Graphics product={product} />
          <div className="summary"></div>
          <div className="buy-box"></div>
        </section>
      )}
    </>
  );
}

function Graphics({ product }) {
  const [sliderIndex, setSliderIndex] = useState(1);

  const handleClick = (index) => setSliderIndex(index);
  return (
    <div className="graphics">
      <div className="image-list">
        {product.images.map((image, index) => (
          <img key={image} src={image} onClick={() => handleClick(index)}></img>
        ))}
      </div>
      <ImageSlider
        images={product.images}
        alt={product.brand}
        action="none"
        sliderIndex={sliderIndex}
      />
    </div>
  );
}
