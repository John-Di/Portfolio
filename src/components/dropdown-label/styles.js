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

  i {
    font-size: 12px !important;
    position: absolute;
    right: 10px;
    top: 14px;
  }
`;

export const DROPDOWN = styled.div`
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
`;

export const LABEL = styled.label`
  ${ButtonReset}
  ${dropdownStyles}
  transition: background color 0.3s ease, color 0.3s ease;

  &::before {
    content: '';
    width: 0%;
    bottom: -${borderWidth}px;
    top: -${borderWidth}px;
    left: -${borderWidth}px;
    background: #000;
    position: absolute;
    transition: width 0.3s ease;
  }

  ${({ isExpanded = false }) => conditionalProp(isExpanded, `&,`)}
  &:hover {
    color: #ffffff;

    &::before {
      width: calc(100% + ${borderWidth * 2}px);
    }

    span:last-of-type {

      &::before,
      &::after {
        background: white;
        transition: background-color 0.01s linear 0.1375s;
      }
    }
  }
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
`;

export const CHECKMARK = styled.span`
  ${VisuallyHidden}
`;

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;