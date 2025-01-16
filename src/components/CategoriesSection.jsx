import useProducts from "../hooks/useProducts";
import { formatText } from "../utils/main";

export function CategoriesSection() {
  const { categories } = useProducts({ limit: 100 });

  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2>Browse our Categories</h2>
        <ul>
          {categories &&
            categories.map((category, i) => (
              <li key={i}>{formatText(category)}</li>
            ))}
        </ul>
      </div>
    </section>
  );
}
