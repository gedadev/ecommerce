import useProducts from "../hooks/useProducts";
import { Filter } from "./Filter";

export function FiltersSection() {
  const { filtersValues } = useProducts();

  return (
    <section className="product-filters">
      {filtersValues &&
        filtersValues.map((values, index) => (
          <Filter key={index} values={values} />
        ))}
    </section>
  );
}
