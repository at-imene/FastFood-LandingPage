import React from "react";

const FilterElement = ({ text, filter }) => {
  return (
    <li className="m-2 border-orange-600 text-orange-600">
      <button
        className="filter-btn capitalize"
        onClick={() => filter(text.toLowerCase())}
      >
        {text}
      </button>
    </li>
  );
};

export default FilterElement;
