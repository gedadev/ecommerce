import useFilters from "../hooks/useFilters";
import { Filter } from "./Filter";
import { useWindowInfo } from "../hooks/useWindowInfo";
import { MdFilterList } from "react-icons/md";
import { MdFilterListOff } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";
import { useState } from "react";

export function FiltersSection() {
  const { filtersValues, filters, resetFilters } = useFilters();
  const { width } = useWindowInfo();

  return (
    <section className="product-filters">
      <OrderBy />

      {width > 900 && filters.length > 0 && (
        <div className="reset-filters" onClick={resetFilters}>
          <p>Reset filters</p>
          <MdFilterListOff className="filter-icon" />
        </div>
      )}

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
  const { filtersValues, filters, resetFilters } = useFilters();
  const [filterActive, setFilterActive] = useState(false);

  const handleMobileFilter = () => {
    setFilterActive(!filterActive);
  };

  return (
    <div className="mobile-filter">
      {filters.length > 0 && (
        <MdFilterListOff className="filter-icon" onClick={resetFilters} />
      )}
      <MdFilterList className="filter-icon" onClick={handleMobileFilter} />
      <div
        className="filters-container"
        style={{
          transform: filterActive ? "translateX(0)" : "translateX(100%)",
          boxShadow: filterActive
            ? "0 0 10px var(--dark-color)"
            : "0 0 0px var(--dark-color)",
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
