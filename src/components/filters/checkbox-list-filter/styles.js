import styled from 'styled-components';
import { conditionalProp } from '../../../utils/AssessProps';
import { ButtonReset, ListReset } from '../../../utils/Resets';
import { device } from '../../../utils/variables';

const borderWidth = 1;

export const LIST = styled.div`
  position: relative;
  width: ${({ dropdownWidth }) => conditionalProp(dropdownWidth, `${(dropdownWidth / 16) + 4}em`, '100%')};

  ul {
    padding: 0;
    margin: 0;
    margin-top: 0.5em;
    z-index: 0;
    width: auto;
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
    }
  }

  ul {
    ${ListReset}
  }

  li {
    ${ListReset}
  }
`;

export const SELECTED = styled.span`
  ${ButtonReset}
  font: 700 11px Open Sans;
  text-transform: uppercase;
  position: relative;
  text-decoration: none;
  border-bottom: ${borderWidth}px solid #000000;
  letter-spacing: 1px;
  min-width: 15em;
  padding: 0.375em 0 0.75em;
  padding-right: 0.5em;
  display: block;
  width: 100%;
  white-space: nowrap;
  text-align: left;
  transition: background color 0.3s ease, color 0.3s ease, width 0.3s ease;

  @media screen and ${device.laptopL} {
    font: 700 13px Open Sans;
  }

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `&,`)}
  &:hover {

    &::before {
      width: calc(100% + ${borderWidth * 2}px);
    }
  }
`;


export const CHEVRON = styled.span`
  position: absolute;
  right: 0.5em;
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
      transform: rotateZ(-135deg);
      transition: border-color 0.05s linear 0.2s, transform 0.2s ease;
    `)}
  }
`;
