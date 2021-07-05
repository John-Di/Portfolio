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
  } = useContext(CollectionContext);

  return (
    <option
      value={value}
    >{name}</option>
    // <div>
    //   <input
    //     {...props}
    //     type="checkbox" onChange={onClick.bind(this, { name, value })}
    //     defaultChecked={filters.hasOwnProperty(name) && filters[name].includes(value)} />
    //   <label htmlFor={id}>
    //     {value}
    //   </label>
    // </div>
  );
}
export default function Filter() {

  const {
    products = [],
    toggleFilter,
    filters = [],
    selectUpdate
  } = useContext(CollectionContext),
    onClick = (filter) => {
      toggleFilter(filter)
    },
    onChange = ({ target }) => {
      console.log('target', target)
      const { name, value } = target;
      console.log('target', { name, value })
      toggleFilter({ name, value });
    },
    unique_options = products.reduce((acc, { options = [] }) => {
      options.forEach(({ name, values }) => {
        if (!acc.hasOwnProperty(name)) {
          acc[name] = [];
        }
        acc[name] = acc[name].concat(values).filter(RemoveDuplicates);
      })

      return acc;
    }, {});

  console.log('filters', filters)
  console.log('unique_options', unique_options)

  return (
    <NAV>
      <UL>
        {arrayToComponentSiblings(Object.keys(unique_options), (name, i) => (
          <LI key={i}>
            <select
              id="collection-filter"
              name={name}
              value={filters.hasOwnProperty(name) ?
                filters[name].value : undefined}
              onChange={onChange.bind(this)}>
              <option>Select {Object.keys(unique_options)[i]}</option>
              {
                arrayToComponentSiblings(unique_options[name], (value, j) => (
                  <Option {...{ name: value, value, id: `unique_options${i}-${j}` }} />

                ))
              }
            </select>
            {/* <UL>
              {arrayToComponentSiblings(unique_options[name], (value, j) =>
                <LI key={j}>
                  <Option {...{ name, value, id: `unique_options${i}-${j}` }} />
                </LI>)}
            </UL> */}
          </LI>
        ))}
      </UL>
    </NAV >
  );
}
