import React from "react";
import "./FilterPills.css";

interface FilterPillsProps {
  filterLabels: string[];
}

const FilterPills: React.FC<FilterPillsProps> = ({ filterLabels }) => {
  return (
    <div className="filter-pills__bar">
      <span className="filter-pills__label">Filters:</span>
      {filterLabels.map((label) => (
        <button key={label} className="filter-pills__pill">
          {label}
        </button>
      ))}
    </div>
  );
};

export default FilterPills;
