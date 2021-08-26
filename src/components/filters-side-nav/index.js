import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  NAV,
  UL,
  CHECKBOXLIST
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import CheckboxListFilter from "../filters/checkbox-list-filter";
import GenerateUniqueId from "../../utils/GenerateUniqueId";

export default function FiltersSideNav() {
  const {
    options,
    toggleFilter
  } = useContext(CollectionContext),
    onClick = (name, { target }) => toggleFilter({ name, value: target.value })
  const context = GenerateUniqueId('option');
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
              context={context}
              options={values}
              name={name}
            />
          </CHECKBOXLIST>
        ))}
      </UL>
    </NAV>
  );
}
