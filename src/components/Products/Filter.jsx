import { useEffect, useState } from "react";
import useFilters from "../../hooks/useFilters";
import { formatText, formatWord, formatValue } from "../../utils/main";

export function Filter({ values }) {
  const [filterLegend, setFilterLegend] = useState(null);
  const [filterValues, setFilterValues] = useState(null);
  const { filters } = useFilters();

  useEffect(() => {
    setFilterLegend(Object.keys(values)[0]);
    setFilterValues(Object.values(values)[0]);
  }, [values]);

  const validateChecked = (value) => {
    const foundFilter = filters.find(
      (filter) => Object.keys(filter)[0] === filterLegend
    );

    if (!foundFilter) {
      return false;
    }

    return foundFilter[filterLegend].includes(formatValue(value));
  };

  return (
    <div className="filter">
      <fieldset className={`${filterLegend}-filter`} name={filterLegend}>
        <legend>{formatWord(filterLegend)}</legend>
        {filterValues &&
          filterValues.map((value, index) => (
            <FilterValue
              key={index}
              value={value}
              checked={validateChecked(value)}
            />
          ))}
      </fieldset>
    </div>
  );
}

function FilterValue({ value, checked }) {
  const { handleFilters } = useFilters();
  const val = value ? formatValue(value) : "other";

  const handleClick = (e) => {
    const target = e.target;
    const { name, checked } = target;
    const fieldset = target.closest("fieldset").name;

    handleFilters({ fieldset, name, checked });
  };

  return (
    <div>
      <input
        type="checkbox"
        name={val}
        id={val}
        onChange={handleClick}
        checked={checked}
      />
      <label htmlFor={val}>{formatText(val)}</label>
    </div>
  );
}
