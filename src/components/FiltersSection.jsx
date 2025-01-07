import useFilters from "../hooks/useFilters";
import { Filter } from "./Filter";
import { useWindowInfo } from "../hooks/useWindowInfo";
import { MdFilterList } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

export function FiltersSection() {
  const { filtersValues } = useFilters();
  const { width } = useWindowInfo();

  return (
    <section className="product-filters">
      <OrderBy />
      {width > 900 ? (
        filtersValues &&
        filtersValues.map((values, index) => (
          <Filter key={index} values={values} />
        ))
      ) : (
        <MobileFilter />
      )}
    </section>
  );
}

function MobileFilter() {
  const { filtersValues } = useFilters();
  const [filterActive, setFilterActive] = useState(false);

  const handleMobileFilter = () => {
    setFilterActive(!filterActive);
  };

  return (
    <div className="mobile-filter">
      <MdFilterList className="filter-icon" onClick={handleMobileFilter} />
      <div
        className="filters-container"
        style={{
          transform: filterActive ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <FaWindowClose className="close-icon" onClick={handleMobileFilter} />
        {filtersValues &&
          filtersValues.map((values, index) => (
            <Filter key={index} values={values} />
          ))}
      </div>
    </div>
  );
}

function OrderBy() {
  const { handleOrderBy } = useFilters();

  return (
    <div className="order-by">
      <label htmlFor="order-by">Order by:</label>
      <select
        name="order-by"
        id="order-by"
        onChange={(e) => handleOrderBy(e.target.value)}
      >
        <option value="">Default</option>
        <option value="price-up">Price: Low to High</option>
        <option value="price-down">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}
