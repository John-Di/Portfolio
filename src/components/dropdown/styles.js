import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import { ButtonReset } from '../../utils/Resets';
import VisuallyHidden from '../../utils/VisuallyHidden';

const borderWidth = 3;

const dropdownStyles = () => `
  font: 700 14px Open Sans;
  text-transform: uppercase;
  position: relative;
  text-decoration: none;
  border: ${borderWidth}px solid #000000;
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

export const DROPDOWN = styled.div`
  width: ${({ dropdownWidth }) => conditionalProp(dropdownWidth, `${dropdownWidth / 16}em`, '100%')};

  ul {
    position: absolute;
    padding: 0;
    margin: 0;
    left: 0;
    z-index: 0;
    overflow: hidden;
    width: auto;
    min-width: 100%;
    height: ${({ dropdownHeight = 0 }) => (dropdownHeight + (dropdownHeight ? 2 : 0)) / 16}em;
    transition: height 0.3s ease;

    li {
      position: relative;
      float: none;

      label {
        border-top: none;
        width: 100%;
        transition: background color 0.3s ease, color 0.3s ease;
      }
    }

    li:nth-of-type(1) label {
      border-top: none;

      &:hover {
        background: #000000;
      }
    }
  }
`;

export const DEFAULT = styled.button`
  ${ButtonReset}
  ${dropdownStyles}
  ${({ isExpanded }) => conditionalProp(isExpanded, `color:  #ffffff;`)}
  transition: background color 0.3s ease, color 0.3s ease;

  &::before {
    content: '';
    bottom: -${borderWidth}px;
    top: -${borderWidth}px;
    left: -${borderWidth}px;
    right: -${borderWidth}px;
    width: 0%;
    background: #000;
    position: absolute;
    transition: 0.3s ease;

    ${({ isExpanded = false }) => conditionalProp(isExpanded, `
      width: calc(100% + ${borderWidth * 2}px);
      transition: width 0.3s ease;
    `)};
  }
`;

export const UL = styled.ul`
  position: absolute;
  padding: 0;
  margin: 0;
  left: 0;
  z-index: 0;
  overflow: hidden;
  width: auto;
  min-width: 100%;
  height: ${({ dropdownHeight = 0 }) => (dropdownHeight + (dropdownHeight ? 2 : 0)) / 16}em;
  transition: height 0.3s ease;

  li {
    position: relative;
    float: none;

    label {
      border-top: none;
      width: 100%;
      transition: background color 0.3s ease, color 0.3s ease;
    }
  }

  li:nth-of-type(1) label {
    border-top: none;

    &:hover {
      background: #000000;
    }
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