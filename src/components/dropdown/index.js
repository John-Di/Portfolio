import React from "react";
import useCollapsible from "../../hooks/useCollapsible";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import CheckList from "../check-list";
import CheckboxLabel from "../checkbox-label";
import {
  SPAN,
  DEFAULT as TOGGLE,
  DROPDOWN
} from './styles';

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
      toggleList,
      dropdownHeight,
      isExpanded
    } = dropdown,

    onMouseEnter = expandList.bind(this),
    onMouseLeave = collapseList.bind(this),
    selectedLabel = checked ? selected[0] : `Select ${name}`;

  return (
    <DROPDOWN
      ref={dropdownRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      dropdownHeight={dropdownHeight}
    >
      <TOGGLE
        isExpanded={isExpanded}
        htmlFor={id}
        onClick={toggleList}
      >
        <SPAN>
          {selectedLabel}
        </SPAN>
      </TOGGLE>
      <CheckList
        context={'product-option'}
        options={options}
        selected={selected}
        name={name}
        deselect={true}
        deselectedLabel={checked ? `Deselect ${name}` : `Select ${name}`}
        onChange={onChange}
        ListItem={CheckboxLabel}
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

  return <DropdownComponent {...dropdown} {...useCollapsible(dropdown)} />;
}
export default Dropdown;