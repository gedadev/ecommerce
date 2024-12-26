import { useEffect, useState } from "react";

const formatWord = (word) =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : null;

export function Filter({ values, handleFilters }) {
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
            <FilterValue
              value={value}
              key={index}
              handleFilters={handleFilters}
            />
          ))}
      </fieldset>
    </div>
  );
}

function FilterValue({ value, handleFilters }) {
  const val = value ? value.split(" ").join("-").toLowerCase() : "other";

  const formatValue = (value) =>
    value
      .split(/[ -]+/)
      .map((word) => formatWord(word))
      .join(" ");

  const handleClick = (e) => {
    const target = e.target;
    const { name, checked } = target;
    const fieldset = target.closest("fieldset").name;

    handleFilters({ fieldset, name, checked });
  };

  return (
    <div>
      <input type="checkbox" name={val} id={val} onClick={handleClick} />
      <label htmlFor={val}>{formatValue(val)}</label>
    </div>
  );
}
