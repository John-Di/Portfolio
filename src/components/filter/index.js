import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import RemoveDuplicates from "../../utils/RemoveDuplicates";

import {
  NAV,
  UL,
  LI,
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import Dropdown from "../dropdown";
import useDropdown from "../dropdown/useDropdown";

const FilterType = {
  'Color': Dropdown,
  'Size': Dropdown
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
    filters = {},
    products = [],
    toggleFilter,
    resetFilter,
  } = useContext(CollectionContext),
    unique_options = products.reduce(groupOptionsByName, {}),
    onClick = (name, { target }) => toggleFilter({ name, value: target.value }),
    onChange = option => {
      toggleFilter(option);
    };

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
          const El = FilterType[name];
          let value = '';
          if (!filters.hasOwnProperty(name) || filters[name].length > 1) {
            value = '';
          } else if (filters[name].length === 1) {
            value = filters[name][0];
          }
          return (
            <LI key={i}>
              <El
                options={values}
                name={name}
                value={value}
                onChange={onChange}
              />
            </LI>
          )
        })}
      </UL>
    </NAV >
  );
}
