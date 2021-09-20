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
import useSelectable from "../../hooks/useSelectable";

const Dropdown = ({
  type = 'ul',
  deselect = true,
  ...dropdown
}) => {

  const {
    selected = [],
    optionLabels = [],
    selectedLabel,
    deselectedLabel,
    labels = [],
    values = [],
    set
  } = useSelectable(dropdown),
    onChange = ({ target }) => set(target.value);
  const {
    context = 'option',
    name,
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
    });

  return (
    <DROPDOWN
      ref={collapsibleRef}
      onMouseEnter={expandList.bind(this)}
      onMouseLeave={collapseList.bind(this)}
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

        options={values}
        labels={optionLabels}
        selected={selected}
        name={name}
        deselect={deselect}
        deselectedLabel={deselectedLabel}
        onChange={onChange}
        ListItem={DropdownLabel}
      />
    </DROPDOWN>
  );
}
export default Dropdown;