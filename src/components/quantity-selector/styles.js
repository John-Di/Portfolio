import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { FloatLeft, FloatRight } from '../../utils/Float';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import { ButtonReset } from '../../utils/Resets';

export const STEPPER = styled.div`
  ${Clearfix}
  display: inline-block;
  border: 1px solid black;
  direction: rtl;

  > * {
    vertical-align: bottom;
  }
`;

const minusButton = `
  ${ButtonReset}
  ${FloatRight}
  border: 0;
  width: 1.75em;
  height: 1.75em;
  position: relative;

  &::before {
    content: '';
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    height: 2px;
    width: ${100 / 2}%;
  }

`;

export const DECREASE = styled.button`
  ${minusButton}
`;

export const INCREASE = styled.button`
  ${minusButton}

  &::after {
    content: '';
    background: black;
    position: absolute;
    top: 50%;
    left: 50%;
    height: ${100 / 2}%;
    width: 2px;
    transform: translate(-50%, -50%);
  }
`;

export const INPUT = styled.input`
  ${FloatLeft}
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

