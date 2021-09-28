import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  NAV,
  UL,
  LI,
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import CheckboxListFilter from "./checkbox-list-filter";

const OptionType = {
  'Color': CheckboxListFilter,
  'Size': CheckboxListFilter
};

export default function Filters() {
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
          const El = OptionType[name]
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
