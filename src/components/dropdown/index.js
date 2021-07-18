import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import useDropdown from "./useDropdown";

export default function Dropdown({ name, options = [], value = ``, onChange }) {

  const updateValue = ({ target }) => {
    const { value } = target;
    onChange({ name, value });
  }

  return (
    <select
      id="collection-filter"
      name={name}
      value={value}
      onChange={updateValue}
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
    </select >
  )
}