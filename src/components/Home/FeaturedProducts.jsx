import { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ProductCard } from "../Products/ProductCard";

export function FeaturedProducts() {
  const { featuredProducts } = useProducts({ quantity: 6 });
  const [leftArrowActive, setLeftArrowActive] = useState(false);
  const [rightArrowActive, setRightArrowActive] = useState(true);

  const handleLeftScroll = () => {
    const container = document.querySelector(".featured-products-container");
    const { children } = container;

    Object.values(children).forEach((child) => {
      child.style.transform = `translate(${0}px)`;
      setLeftArrowActive(false);
      setRightArrowActive(true);
    });
  };

  const handleRightScroll = () => {
    const container = document.querySelector(".featured-products-container");
    const { children, scrollWidth, clientWidth } = container;
    const scrollAmount = scrollWidth - clientWidth;

    Object.values(children).forEach((child) => {
      child.style.transform = `translate(-${scrollAmount}px)`;
      setLeftArrowActive(true);
      setRightArrowActive(false);
    });
  };

  return (
    <section className="featured-section">
      <div className="featured-container">
        <h2>Top Picks for You</h2>
        <div className="featured-products-container">
          {featuredProducts &&
            featuredProducts.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </div>
        <IoIosArrowBack
          className={`arrow-back ${!leftArrowActive ? "disabled" : ""}`}
          onClick={handleLeftScroll}
        />
        <IoIosArrowForward
          className={`arrow-fw ${!rightArrowActive ? "disabled" : ""}`}
          onClick={handleRightScroll}
        />
      </div>
    </section>
  );
}
