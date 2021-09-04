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
    sorting
  } = useContext(CollectionContext),
    udpateSelect = ({ target }) => updateSorting(target.value);

  return (
    <NAV>
      <DROPDOWN>
        <Dropdown
          id="collection-sort"
          name={name}
          selected={sorting}
          deselect={false}
          options={Object.values(sortTypes)}
          onChange={udpateSelect.bind(this)}
        />
      </DROPDOWN>
    </NAV>
  );
}
