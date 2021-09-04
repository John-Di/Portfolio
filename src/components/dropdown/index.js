import React, { useState } from "react";
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
import { getLongestWidth } from "./helpers";

const Dropdown = ({
  type = 'ul',
  deselect = true,
  ...dropdown
}) => {

  const {
    context = 'option',
    name,
    options = [],
    selected = [],
    onChange
  } = dropdown,
    [dropdownWidth, setWidth] = useState(),
    id = [context, name, 'none'].join('-'),
    {
      collapsibleRef,
      expandList,
      collapseList,
      toggleList,
      isExpanded
    } = useCollapsible({
      ...dropdown,
      adjust: () => {
        if (!collapsibleRef) {
          return;
        }

        adjustDropdownDimensions(collapsibleRef.current, isExpanded);
        if (collapsibleRef.current && !dropdownWidth) {
          setWidth([...collapsibleRef.current.querySelectorAll('li')].reduce(getLongestWidth, 0));
        }
      }
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
      dropdownWidth={dropdownWidth}
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
        deselect={deselect}
        deselectedLabel={checked ? `Deselect ${name}` : `Select ${name}`}
        onChange={onChange}
        ListItem={DropdownLabel}
      />
    </DROPDOWN>
  );
}
export default Dropdown;