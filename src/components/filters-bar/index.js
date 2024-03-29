import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  NAV,
  UL,
  LI,
  CHECKBOXLIST,
  DROPDOWN
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import CheckboxListFilter from "../filters/checkbox-list-filter";
import DropdownFilter from "../filters/dropdown-filter";

const OptionType = {
  'Color': CheckboxListFilter,
  'Size': DropdownFilter
};

const ItemType = {
  'Color': CHECKBOXLIST,
  'Size': DROPDOWN
};

export default function FiltersBar() {
  const {
    options,
    toggleFilter
  } = useContext(CollectionContext),
    onClick = (name, { target }) => toggleFilter({ name, value: target.value })

  return (
    <NAV>
      {arrayToComponentSiblings(Object.keys(options), (name, i) => (
        <button
          key={i}
          onClick={onClick.bind(this, name)}>Reset {name}
        </button>
      ))}
      <UL>
        {arrayToComponentSiblings(Object.entries(options), ([name, values], i) => {
          const LI = DROPDOWN;
          const El = DropdownFilter;
          return (
            <LI key={i}>
              <El
                options={values}
                name={name}
              />
            </LI>
          )
        })}
      </UL>
    </NAV >
  );
}
