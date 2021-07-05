
import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";

import {
  NAV,
  UL,
  LI
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import { sortTypes } from "../../hooks/useCollection/sorting";

export default function Sort() {
  const {
    updateSorting,
    sorting
  } = useContext(CollectionContext),
    udpateSelect = ({ target }) => updateSorting(target.value)

  return (
    <NAV>
      {
        <select
          id="collection-sort"
          name='sort'
          value={sorting}
          onChange={udpateSelect.bind(this)}>
          {
            arrayToComponentSiblings(Object.keys(sortTypes), (name, i) => (
              <option
                value={name}
              >{sortTypes[name]}</option>
            ))
          }
        </select>
      }
      {/* <UL>
        {
          arrayToComponentSiblings(Object.keys(sortTypes), (name, i) => (
            <LI key={i}>
              <div>
                <input
                  id={sortTypes[name]}
                  name={name}
                  type="radio" onChange={updateSorting.bind(this, name)}
                  defaultChecked={sortTypes[name] === sorting}
                />
                <label htmlFor={sortTypes[name]}>
                  {sortTypes[name]}
                </label>
              </div>
            </LI>
          ))
        }
      </UL> */}
    </NAV>
  );
}
