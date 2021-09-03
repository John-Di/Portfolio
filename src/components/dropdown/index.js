import React from "react";
import useCollapsible from "../../hooks/useCollapsible";
import CheckList from "../check-list";
import DropdownLabel from "../dropdown-label";
import { adjustDropdownDimensions } from "../../hooks/useCollapsible/helpers";
import {
  SPAN,
  TOGGLE,
  DROPDOWN,
  CHEVRON
} from './styles';

const Dropdown = ({
  type = 'ul',
  ...dropdown
}) => {

  const {
    context = 'option',
    name,
    options = [],
    selected = [],
    onChange
  } = dropdown,
    id = [context, name, 'none'].join('-'),
    {
      collapsibleRef,
      expandList,
      collapseList,
      toggleList,
      dropdownHeight,
      isExpanded
    } = useCollapsible({
      ...dropdown,
      adjust: adjustDropdownDimensions.bind(this)
    }),
    checked = selected.length,
    onMouseEnter = expandList.bind(this),
    onMouseLeave = collapseList.bind(this),
    selectedLabel = checked ? selected[0] : `Select ${name}`;

  return (
    <DROPDOWN
      ref={collapsibleRef}
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
        <CHEVRON isExpanded={isExpanded} />
      </TOGGLE>
      <CheckList
        context={'product-option'}
        options={options}
        selected={selected}
        name={name}
        deselect={true}
        deselectedLabel={checked ? `Deselect ${name}` : `Select ${name}`}
        onChange={onChange}
        ListItem={DropdownLabel}
      />
    </DROPDOWN>
  );
}
export default Dropdown;