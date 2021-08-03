import React, { useContext } from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  LABEL,
  INPUT,
  SPAN,
  CHECKMARK
} from './styles';

const CheckListItem = ({ id, name, value, isCurrent = false, onChange, checked = false, label }) => {
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
      <CHECKMARK />
      <SPAN>
        {label}
      </SPAN>
    </LABEL>
  )
};

export default function CheckList({
  context = 'option',
  name,
  options = [],
  selected = [],
  onChange,
  deselect,
  deselectedLabel
}) {
  console.log(deselectedLabel, deselectedLabel ? deselectedLabel : `Select ${name}`);
  const noSelection = !selected.length;

  return (
    <ul>
      {deselect &&
        <li style={{ 'position': 'relative' }}>
          <CheckListItem
            id={[context, name, 'deselect'].join('-')}
            type="checkbox"
            name={name}
            checked={noSelection}
            value={''}
            label={deselectedLabel ? deselectedLabel : `Select ${name}`}
            onChange={onChange}
          />
        </li>
      }
      {
        arrayToComponentSiblings(options, (value, i) => {
          return (
            <li style={{ 'position': 'relative' }}>
              <CheckListItem
                id={[context, name, value].join('-')}
                isCurrent={!!~selected.indexOf(value)}
                name={name}
                value={value}
                label={value}
                checked={!!~selected.indexOf(value)}
                onChange={onChange}
                key={`${name}-${value}`}
              />
            </li>
          )
        })
      }
    </ul >
  )
}