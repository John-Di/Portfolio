import React from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CheckList from "../check-list";
import {
  UL,
  LABEL,
  INPUT,
  SPAN,
  CHECKMARK,
  DEFAULT,
  DROPDOWN
} from './styles';
import useDropdown from "./useDropdown";

const OptionSelectList = ({ name, options = [], selected = ``, onChange }) => (
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

function OptionCheckList({
  context = 'option',
  name,
  options = [],
  selected = [],
  onChange,
  ...dropdown
}) {
  const id = [context, name, 'none'].join('-'),
    checked = !!selected.length, {
      dropdownRef,
      expandList,
      collapseList,
      dropdownHeight,
      isExpanded
    } = dropdown,

    onMouseEnter = expandList.bind(this),
    onMouseLeave = collapseList.bind(this),
    onClick = e => console.log(e.target.value),

    selectedLabel = checked ? selected[0] : `Select ${name}`;
  return (
    <DROPDOWN
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      dropdownHeight={dropdownHeight}
    >
      <DEFAULT
        isExpanded={isExpanded}
        htmlFor={id}
        onClick={onClick}
      >
        <SPAN>
          {selectedLabel}
        </SPAN>
      </DEFAULT>
      <CheckList
        context={'product-option'}
        options={options}
        selected={selected}
        name={name}
        deselect={true}
        deselectedLabel={`Select ${name}`}
        onChange={onChange}
      />
    </DROPDOWN>
  )
}

const dropdownType = {
  select: OptionSelectList,
  ul: OptionCheckList
};

const Dropdown = ({ type = 'ul', ...dropdown }) => {
  const DropdownComponent = dropdownType[type];

  return <DropdownComponent {...dropdown} {...useDropdown(dropdown)} />;
}
export default Dropdown;