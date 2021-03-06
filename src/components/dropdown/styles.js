import styled from 'styled-components';
import { VerticalLine } from '../../utils/Flex';
import { ButtonReset } from '../../utils/Resets';
import { FancyButtonStyles } from '../../styles/CTAs';
import { FancyDropdownStyles } from '../../styles/Dropdowns';

export const WRAPPER = styled.div`
  margin: 0 auto;
  max-width: 25em;
  position: relative;

  select {
    display: none;
  }
`;

export const HEADER = styled.button`
  ${FancyButtonStyles}
  max-width: unset;
  width: 100%;
`;

export const BODY = styled.div`
  ${VerticalLine}
  background-color: white;
  width: 100%;
  position: absolute;
  top: 100%;
  left: 0;
`;

const assessTheme = ({ theme, ...props }) => {
  switch (theme) {
    case 'fancy':
    default:
      return FancyDropdownStyles(props);
  }
};

export const LIST = styled.ul`
  ${assessTheme}
  font-weight: 500;
  max-width: unset;
  width: 100%;

  li {
    width: 100%;
  }

  button {
    width: 100%;
  }
`;

export const ITEM = styled.button`
  ${ButtonReset}
  cursor: pointer;
  list-style: none;
  margin-bottom: 0.8em;
  max-width: unset;
  padding: 0.5em;
  width: 100%;
`;