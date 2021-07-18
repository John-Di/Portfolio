import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import RemoveDuplicates from "../../utils/RemoveDuplicates";

import {
  NAV,
  UL,
  LI,
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import useDropdown from "../dropdown/useDropdown";
import CheckList from "../check-list";
import DropdownFilter from "./dropdown-filter";

const FilterType = {
  'Color': DropdownFilter,
  'Size': CheckList
};
const useHook = {
  'Color': useDropdown,
  'Size': useDropdown
};

const groupOptionsByName = (groupings, { options = [] }) => {
  options.forEach(({ name, values }) => {
    if (!groupings.hasOwnProperty(name)) {
      groupings[name] = [];
    }
    groupings[name] = groupings[name].concat(values).filter(RemoveDuplicates);
  })

  return groupings;
}

export default function Filter() {

  const {
    products = [],
    toggleFilter
  } = useContext(CollectionContext),
    unique_options = products.reduce(groupOptionsByName, {}),
    onClick = (name, { target }) => toggleFilter({ name, value: target.value }),
    onChange = option => toggleFilter(option);

  return (
    <NAV>
      {arrayToComponentSiblings(Object.keys(unique_options), (name, i) => (
        <button
          key={i}
          onClick={onClick.bind(this, name)}>Reset {name}
        </button>
      ))}
      <UL>
        {arrayToComponentSiblings(Object.entries(unique_options), ([name, values], i) => {
          return (
            <LI key={i}>
              <DropdownFilter
                options={values}
                name={name}
                onChange={onChange}
              />
            </LI>
          )
        })}
      </UL>
    </NAV >
  );
}
