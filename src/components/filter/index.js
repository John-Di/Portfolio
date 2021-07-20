import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  NAV,
  UL,
  LI,
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import DropdownFilter from "./dropdown-filter";
import CheckboxListFilter from "./checkbox-list-filter";

const FilterType = {
  'Color': CheckboxListFilter,
  'Size': DropdownFilter
};

export default function Filter() {
  const {
    options,
    toggleFilter
  } = useContext(CollectionContext),
    onClick = (name, { target }) => toggleFilter({ name, value: target.value }),
    onChange = option => toggleFilter(option);

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
          const El = FilterType[name]
          return (
            <LI key={i}>
              <El
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
