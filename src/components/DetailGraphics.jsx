import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import useProducts from "../hooks/useProducts";

export function DetailGraphics() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { findProduct } = useProducts({ limit: 100 });

  useEffect(() => {
    setProduct(() => findProduct(id));
  }, [findProduct, id]);

  const handleClick = (index) => setSliderIndex(index);

  return (
    <>
      {product && (
        <div className="graphics">
          <div className="image-list">
            {product.images.map((image, index) => (
              <img
                key={image}
                src={image}
                onClick={() => handleClick(index)}
              ></img>
            ))}
          </div>
          <ImageSlider
            images={product.images}
            alt={product.brand}
            action="none"
            sliderIndex={sliderIndex}
          />
        </div>
      )}
    </>
  );
}
