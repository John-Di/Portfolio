import React, { useContext } from "react";
import { sortTypes } from "../../hooks/useCollection/sorting";
import {
  NAV,
  SORTING,
  DROPDOWN
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";
import Dropdown from "../dropdown";

export default function Sort({ name = 'sort' }) {
  const {
    updateSorting,
    sorting = 0
  } = useContext(CollectionContext),
    udpateSelect = ({ target }) => updateSorting(target.value);


  const keys = Object.keys(sortTypes);
  const values = Object.values(sortTypes);
  const selected = sorting;

  return (
    <NAV>
      <DROPDOWN>
        <Dropdown
          id="collection-sort"
          name={name}
          selected={[+sorting]}
          deselect={false}
          options={keys.map((_, i) => i)}
          labels={values}
          onChange={udpateSelect.bind(this)}
        />
      </DROPDOWN>
    </NAV>
  );
}
