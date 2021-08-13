import React from "react";
import { arrayToComponentSiblings } from "../../utils/dom-builder";

export default function CheckList({
  context = 'option',
  name,
  options = [],
  selected = [],
  onChange,
  deselect,
  deselectedLabel,
  ListItem
}) {
  const noSelection = !selected.length;

  return (
    <ul>
      {deselect &&
        <li style={{ 'position': 'relative' }}>
          <ListItem
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
              <ListItem
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
    </ul>
  )
}