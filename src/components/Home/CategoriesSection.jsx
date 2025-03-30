import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { formatText, formatValue } from "../../utils/main";

export function CategoriesSection() {
  const { categories } = useProducts({});

  return (
    <section className="categories-section">
      <div className="categories-container">
        <h2>Browse our Categories</h2>
        <ul>
          {categories &&
            categories.map((category, i) => (
              <Link key={i} to={`/category/${formatValue(category)}`}>
                <li>{formatText(category)}</li>
              </Link>
            ))}
        </ul>
      </div>
    </section>
  );
}
