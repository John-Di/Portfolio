import React, { useEffect, useRef } from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  CONTAINER
} from './styles';

export default function Grid({
  items = [],
  ItemMap,
  className,
  selected,
  rules = []
}) {

  const outerHeight = (element) => {
    const height = element.offsetHeight,
      style = window.getComputedStyle(element)

    return ['top', 'bottom']
      .map(side => parseInt(style[`margin-${side}`]))
      .reduce((total, side) => total + side, height)
  }
  const gridRef = useRef(null);

  const WrapElement = (item, i) => (
    <li key={i} selected={selected === i}>
      {ItemMap(item, i)}
    </li>
  );
  const thing = () => {
    if (!gridRef.current) {
      return;
    }

    const getTallest = (height, li) => height > outerHeight(li) ? height : outerHeight(li);
    const totalHeight = [...gridRef.current.querySelectorAll('li')].reduce(getTallest, 0);

    const height = gridRef.current ? `${totalHeight / 16}em` : 'auto';

    [...gridRef.current.querySelectorAll('li article')].forEach(li => {
      li.style.height = height;
    })

  }
  useEffect(thing, [])

  return (
    <CONTAINER rules={rules} >
      <ul ref={gridRef} className={className}>
        {arrayToComponentSiblings(items, WrapElement)}
      </ul>
    </CONTAINER>
  );
}