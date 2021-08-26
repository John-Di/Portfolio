import React, { useEffect, useRef } from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  CONTAINER
} from './styles';


const getOuterHeight = (element) => {
  const height = element.offsetHeight,
    style = window.getComputedStyle(element)

  return ['top', 'bottom']
    .map(side => parseInt(style[`margin-${side}`]))
    .reduce((total, side) => total + side, height)
}

const getTallest = (height, li) => {
  const tileOuterHeight = getOuterHeight(li);
  return height > tileOuterHeight ? height : tileOuterHeight;
};

export default function Grid({
  items = [],
  ItemMap,
  className,
  selected,
  rules = []
}) {
  const gridRef = useRef(null);

  const WrapElement = (item, i) => (
    <li key={i} selected={selected === i}>
      {ItemMap(item, i)}
    </li>
  );

  const normalizeTileHeights = () => {
    if (!gridRef.current) {
      return;
    }
    const totalHeight = [...gridRef.current.querySelectorAll('li')].reduce(getTallest, 0);

    const height = gridRef.current ? `${totalHeight / 16}em` : 'auto';

    [...gridRef.current.querySelectorAll('li article')].forEach(li => {
      li.style.height = height;
    })

  }
  useEffect(normalizeTileHeights, [])

  return (
    <CONTAINER rules={rules} >
      <ul ref={gridRef} className={className}>
        {arrayToComponentSiblings(items, WrapElement)}
      </ul>
    </CONTAINER>
  );
}