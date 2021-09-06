import React, { useContext, useState } from "react";
import CheckList from "../../check-list";
import CollectionContext from "../../../contexts/CollectionContext";
import useCollapsible from "../../../hooks/useCollapsible";
import CheckboxLabel from "../../checkbox-label";
import { LIST, TOGGLE, SPAN, CHEVRON } from "./styles";
import { adjustDropdownDimensions } from "../../../hooks/useCollapsible/helpers";

const getLongestWidth = (width, li) => width > li.offsetWidth ? width : li.offsetWidth;

export default function CollapsibleCheckboxListFilter({
  context = 'option',
  name,
  options = []
}) {
  const {
    filters = {},
    addFilter,
    removeFilter
  } = useContext(CollectionContext),
    selected = filters.hasOwnProperty(name) ? filters[name] : [];

  const updateSelected = ({ target }) => {
    const { value } = target,
      filter = { name, value };

    if (selected.includes(value)) {
      removeFilter(filter)
    } else {
      addFilter(filter)
    }
  }
  const id = [context, name, 'none'].join('-'),
    [dropdownWidth, setWidth] = useState(),
    checked = !!selected.length, {
      collapsibleRef,
      toggleList,
      isExpanded
    } = useCollapsible({
      name,
      options,
      adjust: () => {
        if (!collapsibleRef) {
          return;
        }

        adjustDropdownDimensions(collapsibleRef.current, isExpanded);
      }
    }),
    selectedLabel = checked ? `${name} (${selected.length})` : `Select ${name}`;

  return (
    <LIST
      ref={collapsibleRef}
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
        onChange={updateSelected}
        ListItem={CheckboxLabel}
      />
    </LIST >
  )
}
