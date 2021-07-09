import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import RemoveDuplicates from "../../utils/RemoveDuplicates";

import {
  NAV,
  UL,
  LI,
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";

const Dropdown = ({ name, options = [] }) => {
  const {
    toggleFilter,
    filters = []
  } = useContext(CollectionContext),
    onChange = ({ target }) => {
      const { value } = target;
      toggleFilter({ name, value });
    },
    defaultValue = filters.hasOwnProperty(name) ? filters[name].value : undefined;

  return (<select
    id="collection-filter"
    name={name}
    value={defaultValue}
    onChange={onChange.bind(this)}
  >
    <option
      id={`unique_options-${name}-none}`}
      value={null}
    >{`Select ${name}`}</option>
    {
      arrayToComponentSiblings(options, (value, j) => (
        <option
          id={`unique_options-${name}-${value}`}
          value={value}
        >{value}</option>
      ))
    }
  </select>)
}

const FilterType = {
  'Color': Dropdown,
  'Size': Dropdown
};

export default function Filter() {

  const {
    products = [],
    resetFilter,
  } = useContext(CollectionContext),
    unique_options = products.reduce((acc, { options = [] }) => {
      options.forEach(({ name, values }) => {
        if (!acc.hasOwnProperty(name)) {
          acc[name] = [];
        }
        acc[name] = acc[name].concat(values).filter(RemoveDuplicates);
      })

      return acc;
    }, {}),
    onClick = name => resetFilter(name);


  return (
    <NAV>
      {arrayToComponentSiblings(Object.keys(unique_options), (name, i) => <button key={i} onClick={onClick.bind(this, name)}>Reset {name}</button>)}
      <UL>
        {arrayToComponentSiblings(Object.keys(unique_options), (name, i) => {
          const El = FilterType[name];
          return (
            <LI key={i}>
              <El name={name} options={unique_options[name]} />
            </LI>
          )
        })}
      </UL>
    </NAV >
  );
}
