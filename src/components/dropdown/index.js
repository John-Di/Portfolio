import React, {
  useState
} from "react";
import {
  arrayToComponentSiblings
} from '../../utils/dom-builder';
import {
  WRAPPER,
  HEADER,
  BODY,
  LIST,
  ITEM
} from './styles';
export default function Dropdown({
  items = [],
  updateValue,
  theme,
  selected
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = e => {
    e.preventDefault();
    setIsOpen(!isOpen)
  };

  const ListItem = (item, i) => (
    <li key={i}>
      <ITEM type="button" onClick={updateValue} value={item.value}>
        {item.title || item.name}
      </ITEM>
    </li>
  );

  return (
    <WRAPPER>
      <HEADER onClick={toggleDropdown} isOpen={isOpen}>
        {items.find(i => i.value === selected).title || items.find(i => i.value === selected).name || items[0].value}
      </HEADER>
      {isOpen && (
        <BODY>
          <LIST
            theme={theme}
          >
            {arrayToComponentSiblings(items, ListItem)}
          </LIST>
        </BODY>
      )}
    </WRAPPER>
  );
}