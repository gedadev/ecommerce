import useFilters from "../hooks/useFilters";
import { Filter } from "./Filter";

export function FiltersSection() {
  const { filtersValues } = useFilters();

  return (
    <section className="product-filters">
      <OrderBy />
      {filtersValues &&
        filtersValues.map((values, index) => (
          <Filter key={index} values={values} />
        ))}
    </section>
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
