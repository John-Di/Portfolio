import React from "react";
import useSelectable from "../../hooks/useSelectable";
import { arrayToComponentSiblings } from "../../utils/dom-builder";
import {
  CHEVRON,
  X
} from './styles';

export default function CheckList({
  context = 'option',
  name,
  options = [],
  selected = [0],
  labels = [],
  onChange,
  deselect = false,
  deselectedLabel,
  ListItem
}) {
  const noSelection = !selected.length;

  const optionLabels = labels ? labels : options;
  return (
    <ul>
      {deselect &&
        <li>
          <ListItem
            id={[context, name, 'deselect'].join('-')}
            type="checkbox"
            name={name}
            checked={noSelection}
            value={''}
            label={deselectedLabel ? deselectedLabel : `Select ${name}`}
            onChange={onChange}
            icon={!noSelection ? <X /> : undefined}
          />
        </li>
      }
      {
        arrayToComponentSiblings(options, (value, i) => {
          const checked = !!~selected.indexOf(value);
          return (
            <li style={{ 'position': 'relative' }}>
              <ListItem
                id={[context, name, value].join('-')}
                isCurrent={checked}
                name={name}
                value={value}
                label={optionLabels[i]}
                checked={checked}
                onChange={onChange}
                key={`${name}-${value}`}
              />
            </li>
          )
        })
      }
    </ul>
  )
}