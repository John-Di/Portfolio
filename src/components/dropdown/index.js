import React, {
  useState
} from "react";
import {
  WRAPPER,
  HEADER,
  BODY,
  LIST,
  ITEM
} from './styles';
export default function Dropdown({
  items = [],
  onClick,
  Option,
  children
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => onOptionClicked();

  const onOptionClicked = value => () => {
    setIsOpen(!isOpen)
  };

  return (
    <WRAPPER>
      <HEADER onClick={onOptionClicked}>
        {selectedOption || "Mangoes"}
      </HEADER>
      {isOpen && (
        <BODY>
          <LIST>
            {children}
          </LIST>
        </BODY>
      )}
    </WRAPPER>
  );
}