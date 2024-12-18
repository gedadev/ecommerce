import { useEffect, useState } from "react";

const formatWord = (word) =>
  word ? word.charAt(0).toUpperCase() + word.slice(1) : null;

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
  const val = value ? value.split(" ").join("-").toLowerCase() : "other";

  const formatValue = (value) =>
    value
      .split(/[ -]+/)
      .map((word) => formatWord(word))
      .join(" ");

  return (
    <div>
      <input type="checkbox" name={val} id={val} />
      <label htmlFor={val}>{formatValue(val)}</label>
    </div>
  );
}
