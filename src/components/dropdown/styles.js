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
  position: relative;
  max-width: 100%;
  width: 12.5em;
  width: ${({ dropdownWidth }) => conditionalProp(dropdownWidth, `${(dropdownWidth / 16) + 2}em`, '100%')};
  transition: width 0.3s ease;

  button {
    width: 100%;
    transition: width 0.3s ease;
  }


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
    transition: height 0.3s ease, width 0.3s ease;

    li {
      position: relative;
      float: none;
      margin: 0;
      background: white;

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
  }

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `&,`)}
  &:hover {
    color: #ffffff;
    transition: color 0.05s ease 0.025s;

    &::before {
      width: calc(100% + ${borderWidth * 2}px);
    }

    span + span {
      transform: translateY(-35%);

      &::before {
        border-right-color: white;
        border-bottom-color: white;
        border-color-right: white;
        border-color-bottom: white;
        transform: rotateZ(-135deg);
        transition: border-color 0.05s linear 0.2s, transform 0.2s ease;
      }
    }
  }
`;

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;

export const CHEVRON = styled.span`
  position: absolute;
  right: 1.25em;
  top: 50%;
  width: 0.875em;
  height: 0.875em;
  transform: translateY(-75%);
  transition: transform 0.2s ease;

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `
    transform: translateY(-35%);
  `)}

  &::before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    border-right: 2px solid black;
    border-bottom: 2px solid black;
    transform: rotateZ(45deg);
    transition: border-color 0.05s linear 0.05s, transform 0.2s ease;

    ${({ isExpanded = false }) => conditionalProp(isExpanded, `
      border-right-color: white;
      border-bottom-color: white;
      border-color-right: white;
      border-color-bottom: white;
      transform: rotateZ(-135deg);
      transition: border-color 0.05s linear 0.2s, transform 0.2s ease;
    `)}
  }
`;