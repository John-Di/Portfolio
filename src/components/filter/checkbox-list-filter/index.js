import React, { useContext } from "react";
import CheckList from "../../../components/check-list";
import CollectionContext from "../../../contexts/CollectionContext";

export default function CheckboxListFilter({
  name,
  options = []
}) {
  const {
    filters = {},
    addFilter,
    removeFilter
  } = useContext(CollectionContext),
    selected = filters.hasOwnProperty(name) ? filters[name] : [];

  const updateValue = ({ target }) => {
    const { value } = target,
      filter = { name, value };

    if (selected.includes(value)) {
      removeFilter(filter)
    } else {
      addFilter(filter)
    }
  }

  return (
    <CheckList
      context={'product-option'}
      options={options}
      selected={selected}
      name={name}
      onChange={updateValue}
    />
  )
}
