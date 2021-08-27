import React, { useEffect, useRef } from "react";
import useCollapsible from "../../hooks/useCollapsible";
import { normalizeTileHeights } from "../../hooks/useCollapsible/helpers";
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
  const
    {
      collapsibleRef,
      expandList,
      collapseList,
      isExpanded
    } = useCollapsible({ adjust: normalizeTileHeights.bind(this) });

  const WrapElement = (item, i) => (
    <li
      key={i}
      selected={selected === i}
      onMouseEnter={expandList}
      onMouseLeave={collapseList}
    >
      {ItemMap(item, i)}
    </li>
  );

  return (
    <CONTAINER rules={rules} >
      <ul ref={collapsibleRef} className={className}>
        {arrayToComponentSiblings(items, WrapElement)}
      </ul>
    </CONTAINER>
  );
}