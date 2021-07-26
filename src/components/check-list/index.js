import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  LABEL,
  INPUT,
  SPAN,
  CHECHMARK
} from './styles';

const CheckListItem = ({ id, name, value, isCurrent = false, onChange, checked = false }) => {
  return (
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
  )
};

export default function CheckList({
  context = 'option',
  name,
  options = [],
  selected = [],
  onChange
}) {

  return (
    <ul>
      {
        arrayToComponentSiblings(options, (value, j) => {
          return (
            <li>
              <CheckListItem
                id={[context, name, value].join('-')}
                isCurrent={!!~selected.indexOf(value)}
                name={name}
                value={value}
                checked={!!~selected.indexOf(value)}
                onChange={onChange}
                key={j}
              />
            </li>
          )
        })
      }
    </ul >
  )
}