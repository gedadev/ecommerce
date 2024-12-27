import { useEffect, useState } from "react";
import useFilters from "../hooks/useFilters";
import { formatText, formatWord, formatValue } from "../utils/main";

export function Filter({ values }) {
  const [filterLegend, setFilterLegend] = useState(null);
  const [filterValues, setFilterValues] = useState(null);

  useEffect(() => {
    setFilterLegend(Object.keys(values)[0]);
    setFilterValues(Object.values(values)[0]);
  }, [values]);

  return (
    <div className="filter">
      <fieldset className={`${filterLegend}-filter`} name={filterLegend}>
        <legend>{formatWord(filterLegend)}</legend>
        {filterValues &&
          filterValues.map((value, index) => (
            <FilterValue value={value} key={index} />
          ))}
      </fieldset>
    </div>
  );
}

function FilterValue({ value }) {
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
      <input type="checkbox" name={val} id={val} onClick={handleClick} />
      <label htmlFor={val}>{formatText(val)}</label>
    </div>
  );
}
