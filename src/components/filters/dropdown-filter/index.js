import React, { useContext } from "react";
import CollectionContext from "../../../contexts/CollectionContext";
import Dropdown from "../../dropdown";

export default function DropdownFilter({
  name,
  ...dropdown
}) {
  const {
    filters = {},
    toggleFilter
  } = useContext(CollectionContext),
    selected = filters.hasOwnProperty(name) && filters[name].length === 1 ? filters[name] : [],
    updateFilterOption = ({ target }) => {
      const { value } = target;
      toggleFilter({ name, value });
    };

  return (
    <Dropdown
      {...dropdown}
      name={name}
      selected={selected}
      onChange={updateFilterOption}
    />
  )
}
