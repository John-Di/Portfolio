import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import { ButtonReset } from '../../utils/Resets';

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

  i {
    font-size: 12px !important;
    position: absolute;
    right: 10px;
    top: 14px;
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
    height: 0;
    transition: height 0.3s ease;

    li {
      position: relative;
      float: none;
      margin: 0;

      label {
        border-top: none;
        width: 100%;

        &::before {
        }
      }
    }

    li:nth-of-type(1) label {
      border-top: none;
    }
  }
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  ${dropdownStyles}
  transition: color 0.05s ease 0.225s;

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `color: #ffffff;`)}

  &::before {
    content: '';
    bottom: -${borderWidth}px;
    top: -${borderWidth}px;
    left: -${borderWidth}px;
    width: 0%;
    background: #000;
    position: absolute;
    transition: width 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    right: 1em;
    top: 50%;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    width: 1em;
    height: 1em;
    transition: border-color 0.05s linear 0.05s;
    transform: rotateZ(-45deg) translateY(-50%);
  }

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `&,`)}
  &:hover {
    color: #ffffff;
    transition: color 0.05s ease 0.025s;

    &::before {
      width: calc(100% + ${borderWidth * 2}px);
    }

    &::after {
      border-right-color: white;
      border-bottom-color: white;
      border-color-right: white;
      border-color-bottom: white;
      transition: border-color 0.05s linear 0.2s;
    }
  }
`;

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;