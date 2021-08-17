import styled from 'styled-components';
import { conditionalProp } from '../../../utils/AssessProps';
import { ButtonReset, ListReset } from '../../../utils/Resets';

const borderWidth = 3;

export const LIST = styled.div`
  margin: -0.5em 0;
  position: relative;
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
  padding: 1em 2em;
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

`;

export const SPAN = styled.span`
  display: block;
  position: relative;
  white-space: nowrap;
`;