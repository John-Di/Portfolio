import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { FloatRight } from '../../utils/Float';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import { ButtonReset } from '../../utils/Resets';

export const STEPPER = styled.div`
  ${Clearfix}
  display: inline-block;
  border: 1px solid black;

  > * {
    vertical-align: bottom;
  }
`;

export const BUTTON = styled.button`
  ${ButtonReset}
  ${FloatRight}
  border: 0;
  width: 1.75em;
  height: 1.75em;
  position: relative;

  &::before,
  ~ button::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    background: black;
    transform: translate(-50%, -50%);
  }

  &::before {
    height: 2px;
    width: ${100 / 2}%;
  }

  ~ button::after {
    height: ${100 / 2}%;
    width: 2px;
  }
`;

export const INPUT = styled.input`
  ${FloatRight}
  border: 0;
  width: 1.875em;
  height: 1.75em;
  text-align: center;

  &[type=number] {
    -moz-appearance: textfield;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const LABEL = styled.label`
  display: block;
  font-weight: bold;
  font-size: 0.75em;
  margin-bottom: 0.25em;
`;

