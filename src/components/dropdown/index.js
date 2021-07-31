import React from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
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


const CheckListItem = ({ id, name, value, label, onChange, checked = false }) => (
  <LABEL
    isCurrent={checked}
    htmlFor={id}
  >
    <INPUT
      id={id}
      type="checkbox"
      name={name}
      checked={checked}
      value={value}
      onChange={onChange} />
    <CHECKMARK />
    <SPAN>
      {value ? value : label}
    </SPAN>
  </LABEL>
);

function CheckList({
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
      dropdownWidth,
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
      <UL dropdownHeight={dropdownHeight}>
        <li style={{ 'position': 'relative' }}>
          <CheckListItem
            id={id}
            type="checkbox"
            name={name}
            checked={!checked}
            value={''}
            label={`Select ${name}`}
            onChange={onChange}
          />
        </li>
        {
          arrayToComponentSiblings(options, (value, j) => {
            return (
              <li style={{ 'position': 'relative' }}>
                <CheckListItem
                  id={[context, name, value].join('-')}
                  name={name}
                  value={value}
                  checked={!!~selected.indexOf(value)}
                  onChange={onChange}
                  key={j}
                />
              </li>
            )
          })
        }</UL>
    </DROPDOWN>
  )
}

const ListDropdown = ({ name, selected = ``, onChange, ...dropdown }) =>
  <CheckList
    {...dropdown}
    name={name}
    selected={selected}
    onChange={onChange}
  />;

const dropdownType = {
  select: SelectDropdown,
  ul: ListDropdown
};

const Dropdown = ({ type = 'ul', ...dropdown }) => {
  const DropdownComponent = dropdownType[type];

  return <DropdownComponent {...dropdown} {...useDropdown(dropdown)} />;
}
export default Dropdown;