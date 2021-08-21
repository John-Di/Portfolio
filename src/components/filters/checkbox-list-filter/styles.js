import styled from 'styled-components';
import { conditionalProp } from '../../../utils/AssessProps';
import { ButtonReset, ListReset } from '../../../utils/Resets';

const borderWidth = 2;

export const LIST = styled.div`
  margin: -0.5em 0;
  position: relative;
  width: ${({ dropdownWidth }) => conditionalProp(dropdownWidth, `${(dropdownWidth / 16) + 4}em`, '100%')};

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
    margin: 0.5em 0;
  }
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  font: 700 14px Open Sans;
  text-transform: uppercase;
  position: relative;
  text-decoration: none;
  border-bottom: ${borderWidth}px solid #000000;
  letter-spacing: 1px;
  min-width: 15em;
  padding: 0.375em 0;
  padding-right: 0.5em;
  display: block;
  width: 100%;
  text-align: left;
  transition: background color 0.3s ease, color 0.3s ease, width 0.3s ease;

  i {
    font-size: 12px !important;
    position: absolute;
    right: 10px;
    top: 14px;
  }

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `&,`)}
  &:hover {

    &::before {
      width: calc(100% + ${borderWidth * 2}px);
    }

    span + span {
      transform: translateY(-35%);

      &::before {
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
