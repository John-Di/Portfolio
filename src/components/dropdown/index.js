import React from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";

const Dropdown = ({ name, options = [], selected = ``, onChange }) => (
  <select
    id="collection-filter"
    name={name}
    value={selected}
    onChange={onChange}
  >
    <option
      id={`unique_options-${name}-none}`}
      value={``}
    >{`Select ${name}`}</option>
    {
      arrayToComponentSiblings(options, (value, j) => (
        <option
          key={j}
          id={`unique_options-${name}-${value}`}
          value={value}
        >{value}</option>
      ))
    }
  </select>
)
export default Dropdown;