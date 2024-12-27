import { createContext, useState } from "react";

export const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const [filters, setFilters] = useState([]);

  const handleFilters = ({ fieldset, name, checked }) => {
    setFilters((prevFilters) => {
      const foundFilter = prevFilters.find(
        (filter) => Object.keys(filter)[0] === fieldset
      );

      if (!foundFilter) {
        return [...prevFilters, { [fieldset]: [name] }];
      }

      if (!checked) {
        const newFilters = prevFilters.map((filter) => {
          if (Object.keys(filter)[0] === fieldset) {
            filter[fieldset] = filter[fieldset].filter(
              (value) => value !== name
            );

            if (filter[fieldset].length === 0) {
              return null;
            }
          }
          return filter;
        });

        return newFilters.filter((filter) => filter);
      }

      const newFilters = prevFilters.map((filter) => {
        if (Object.keys(filter)[0] === fieldset) {
          filter[fieldset].push(name);
        }
        return filter;
      });

      return newFilters;
    });
  };

  return (
    <FiltersContext.Provider value={{ filters, handleFilters }}>
      {children}
    </FiltersContext.Provider>
  );
}
