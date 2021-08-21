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
`;

export const LABEL = styled.label`
  ${ButtonReset}
  ${dropdownStyles}


  ${({ isCurrent }) => conditionalProp(isCurrent, `&,`)}
  &:hover {
    background: #000000;
    color: #ffffff;
  }
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
  cursor: pointer;
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

export const X = styled.span`
  position: absolute;
  right: 1.0625em;
  top: 50%;
  width: 1.25em;
  height: 1.25em;
  transform: translateY(-50%);
  transition: transform 0.2s ease;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 1.5px;
    top: 50%;
    left: 50%;
    background: black;
    transition: background-color 0.01s linear 0s;
  }

  &::before {
    transform: translate(-50%, -50%) rotateZ(-45deg);
  }

  &::after {
    transform: translate(-50%, -50%) rotateZ(45deg);
  }
`;

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;