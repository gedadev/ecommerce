import useFilters from "../hooks/useFilters";
import { Filter } from "./Filter";

export function FiltersSection() {
  const { filtersValues } = useFilters();

  return (
    <section className="product-filters">
      {filtersValues &&
        filtersValues.map((values, index) => (
          <Filter key={index} values={values} />
        ))}
    </section>
  );
}
