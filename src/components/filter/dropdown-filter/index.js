import React, { useContext } from "react";
import CollectionContext from "../../../contexts/CollectionContext";
import Dropdown from "../../dropdown";

export default function DropdownFilter({
  name,
  onChange,
  ...dropdown
}) {
  const {
    filters = {}
  } = useContext(CollectionContext);
  let value = '';
  if (!filters.hasOwnProperty(name) || filters[name].length > 1) {
    value = '';
  } else if (filters[name].length === 1) {
    value = filters[name][0];
  }

  const updateFilterOption = ({ target }) => {
    const { value } = target;
    onChange({ name, value });
  }

  return (
    <Dropdown
      {...dropdown}
      name={name}
      selected={value}
      onChange={updateFilterOption}
    />
  )
}
