import React from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CheckList from "../check-list";

const SelectDropdown = ({ name, options = [], selected = ``, onChange }) => (
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
      arrayToComponentSiblings(options, (value, i) => (
        <option
          key={i}
          id={`unique_options-${name}-${value}`}
          value={value}
        >{value}</option>
      ))
    }
  </select>
);

const ListDropdown = ({ name, selected = ``, onChange, ...dropdown }) => {

  return (
    <CheckList
      {...dropdown}
      name={name}
      selected={selected}
      onChange={onChange}
    />
  )
};

const dropdownType = {
  select: SelectDropdown,
  ul: ListDropdown
};

const Dropdown = ({ type = 'ul', ...dropdown }) => {
  const DropdownComponent = dropdownType[type];

  return <DropdownComponent {...dropdown} />;
}
export default Dropdown;