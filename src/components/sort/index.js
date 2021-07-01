
import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";

import {
  NAV,
  UL,
  LI
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import { sortTypes } from "../../hooks/useCollection/reducer";

export default function Sort() {
  const {
    updateSorting
  } = useContext(CollectionContext);

  return (
    <NAV>
      <UL>
        {arrayToComponentSiblings(Object.keys(sortTypes), (name, i) => (
          <LI key={i}>
            <button className={'Tim'} onClick={updateSorting.bind(this, name)}>{sortTypes[name]}</button>
          </LI>
        ))}
      </UL>
    </NAV>
  );
}
