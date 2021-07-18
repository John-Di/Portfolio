import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import useDropdown from "./useDropdown";

const CheckListItem = ({ id, name, value, isCurrent = false, onClick }) => {
  return (
    <div>

      <input id={id} type="radio" name={name} />
      <label
        isCurrent={isCurrent}
        htmlFor={id}
        onClick={onClick}>
        {value}
      </label>
    </div>
  )
};

export default function CheckList({ context = 'option', name, options = [], selected = ``, onChange }) {

  const updateValue = ({ target }) => {
    const { value } = target;
    onChange({ name, value });
  }

  return (
    <ul>
      {
        arrayToComponentSiblings(options, (value, j) => (
          <CheckListItem
            id={[context, name, value].join('-')}
            isCurrent={value === selected}
            name={name}
            value={value}
            onClick={updateValue}
            key={j}
          />
        ))
      }
    </ul >
  )
}