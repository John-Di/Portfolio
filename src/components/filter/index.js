import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import RemoveDuplicates from "../../utils/RemoveDuplicates";

import {
  NAV,
  UL,
  LI,
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";

const Option = (props) => {
  const { name, value, id, } = props;

  const {
    toggleFilter,
    filters = []
  } = useContext(CollectionContext),
    onClick = (filter, e) => {
      toggleFilter(filter)
    }

  return (
    <div>
      <input
        {...props}
        type="checkbox" onChange={onClick.bind(this, { name, value })}
        defaultChecked={filters.hasOwnProperty(name) && filters[name].includes(value)} />
      <label htmlFor={id}>
        {value}
      </label>
    </div>
  );
}
export default function Filter() {

  const {
    products = [],
    updateSorting
  } = useContext(CollectionContext),
    unique_options = products.reduce((acc, { options = [] }) => {
      options.forEach(({ name, values }) => {
        if (!acc.hasOwnProperty(name)) {
          acc[name] = [];
        }
        acc[name] = acc[name].concat(values).filter(RemoveDuplicates);
      })

      return acc;
    }, {});

  return (
    <NAV>
      <UL>
        {arrayToComponentSiblings(Object.keys(unique_options), (name, i) => (
          <LI key={i}>
            <button className={'Tim'} onClick={updateSorting}>{name}</button>
            <UL>
              {arrayToComponentSiblings(unique_options[name], (value, j) =>
                <LI key={j}>
                  <Option {...{ name, value, id: `unique_options${i}-${j}` }} />
                </LI>)}
            </UL>
          </LI>
        ))}
      </UL>
    </NAV >
  );
}
