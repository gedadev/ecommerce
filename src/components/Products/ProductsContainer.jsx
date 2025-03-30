import useFilters from "../../hooks/useFilters";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { ProductCard } from "./ProductCard";

export function ProductsContainer() {
  const { filteredProducts, productsPerPage, currentPage } = useFilters();

  return (
    <section className="products-container">
      {filteredProducts &&
        filteredProducts
          .slice(
            (currentPage - 1) * productsPerPage,
            currentPage * productsPerPage
          )
          .map((product) => <ProductCard product={product} key={product.id} />)}
      <ProductNavigation />
    </section>
  );
}

function ProductNavigation() {
  const { currentPage, handleCurrentPage, totalPages } = useFilters();

  return (
    <div className="product-navigation">
      <button
        className={currentPage === 1 ? "active" : ""}
        onClick={() => handleCurrentPage(currentPage - 1)}
      >
        <IoIosArrowBack />
      </button>
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          className={currentPage === i + 1 ? "active" : ""}
          disabled={currentPage === i + 1}
          onClick={() => handleCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className={currentPage === totalPages ? "active" : ""}
        onClick={() => handleCurrentPage(currentPage + 1)}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}
