import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  NAV,
  UL,
  CHECKBOXLIST
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import CheckboxListFilter from "../filters/checkbox-list-filter";

export default function FiltersSideNav() {
  const {
    options,
    toggleFilter
  } = useContext(CollectionContext),
    onClick = (name, { target }) => toggleFilter({ name, value: target.value })

  return (
    <NAV isOpen={true}>
      {/* {arrayToComponentSiblings(Object.keys(options), (name, i) => (
        <button
          key={i}
          onClick={onClick.bind(this, name)}>Reset {name}
        </button>
      ))} */}
      <UL>
        {arrayToComponentSiblings(Object.entries(options), ([name, values], i) => (
          <CHECKBOXLIST key={i}>
            <CheckboxListFilter
              options={values}
              name={name}
            />
          </CHECKBOXLIST>
        ))}
      </UL>
    </NAV>
  );
}
