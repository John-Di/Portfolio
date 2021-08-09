import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import { ButtonReset } from '../../utils/Resets';
import VisuallyHidden from '../../utils/VisuallyHidden';

const dropdownStyles = () => `
  font: 700 14px Open Sans;
  text-transform: uppercase;
  position: relative;
  text-decoration: none;
  border: 3px solid #000000;
  letter-spacing: 1px;
  padding: 1em 2em;
  display: block;
  min-width: 23ch;
  width: 100%;
  text-align: left;
  transition: width 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  i {
    font-size: 12px !important;
    position: absolute;
    right: 10px;
    top: 14px;
  }

`;

export const LABEL = styled.label`
  ${ButtonReset}
  ${dropdownStyles}


  ${({ isCurrent }) => conditionalProp(isCurrent, `
    background: #000000;
    color: #ffffff;
  `)}

  ${({ isCurrent }) => conditionalProp(isCurrent, `&,`)}
  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
  cursor: pointer;
`
export const CHECKMARK = styled.span`
`;

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;