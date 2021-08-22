import styled from 'styled-components';
import { conditionalProp } from '../../utils/AssessProps';
import Clearfix from '../../utils/Clearfix';
import { ButtonReset } from '../../utils/Resets';
import { device } from '../../utils/variables';
import VisuallyHidden from '../../utils/VisuallyHidden';

export const LABEL = styled.label`
  ${ButtonReset}
  ${Clearfix}
  display: block;

  span {
    line-height: 1;
    vertical-align: middle;
    display: inline-block;
  }
`;

export const INPUT = styled.input`
  ${VisuallyHidden}
  cursor: pointer;
`

export const SPAN = styled.span`
  position: relative;
  white-space: nowrap;
  font-size: 0.8125em;
  margin-left: 1em;

  @media screen and ${device.laptopL} {
    font-size: 0.9375em;
  }
`;

export const CHECKBOX = styled.span`
  background-color: white;
  width: 1em;
  height: 1em;
  border-radius: 27.5%;
  position: relative;
  border: 1px solid black;

  &::before {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-40%, -50%) rotateZ(45deg);
    width: ${100 * 5.5 / 16}%;
    height: ${100 * 10 / 16}%;
    border-bottom: 3px solid black;
    border-right: 3px solid black;
  }

  ${({ checked }) => conditionalProp(checked, `
    background: black;
    &::before {
      content: '';
      border-color: white;
    }
  `)}

`;