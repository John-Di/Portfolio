import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  LABEL,
  INPUT,
  SPAN,
  CHECHMARK
} from './styles';
import CollectionContext from "../../contexts/CollectionContext";

const CheckListItem = ({ id, name, value, isCurrent = false, onChange, checked = false }) => (
  <LABEL
    isCurrent={checked}
    htmlFor={id}
  >
    <INPUT
      id={id}
      type="checkbox"
      name={name}
      checked={checked}
      value={value}
      onChange={onChange} />
    <CHECHMARK />
    <SPAN>
      {value}
    </SPAN>
  </LABEL>
);

export default function CheckList({ context = 'option', name, options = [] }) {

  const {
    filters = {},
    addFilter,
    removeFilter
  } = useContext(CollectionContext),
    selected = filters.hasOwnProperty(name) ? filters[name] : [];

  const updateValue = ({ target }) => {
    const { value } = target,
      filter = { name, value };

    if (selected.includes(value)) {
      removeFilter(filter)
    } else {
      addFilter(filter)
    }
  }

  return (
    <ul>
      {
        arrayToComponentSiblings(options, (value, j) => (
          <li>
            <CheckListItem
              id={[context, name, value].join('-')}
              isCurrent={selected.includes(value)}
              name={name}
              value={value}
              checked={selected.includes(value)}
              onChange={updateValue}
              key={j}
            />
          </li>
        ))
      }
    </ul >
  )
}