import React, { useContext } from "react";
import CheckList from "../../../components/check-list";
import CollectionContext from "../../../contexts/CollectionContext";
import useCollapsible from "../../../hooks/useCollapsible";
import CheckboxLabel from "../../checkbox-label";
import { LIST, SELECTED, SPAN, CHEVRON } from "./styles";

export default function CheckboxListFilter({
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
    checked = !!selected.length,
    selectedLabel = checked ? `${name} (${selected.length})` : `Select ${name}`;

  return (
    <LIST>
      <SELECTED>
        {selectedLabel}
      </SELECTED>
      <CheckList
        context={'product-option'}
        options={options}
        selected={selected}
        name={name}
        onChange={updateSelected}
        ListItem={CheckboxLabel}
      />
    </LIST>
  )
}
