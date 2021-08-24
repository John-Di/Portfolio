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
  selected = [],
  onChange,
  deselect,
  deselectedLabel,
  ListItem
}) {
  const noSelection = !selected.length, {
    dropdownRef,
    expandList,
    collapseList,
    toggleList,
    dropdownHeight,
    isExpanded
  } = useSelectable({ options, name });

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
                isCurrent={!!~selected.indexOf(value)}
                name={name}
                value={value}
                label={value}
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