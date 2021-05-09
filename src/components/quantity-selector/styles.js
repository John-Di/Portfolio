import styled from 'styled-components';
import Clearfix from '../../utils/Clearfix';
import { FloatLeft, FloatRight } from '../../utils/Float';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import { ButtonReset } from '../../utils/Resets';

export const STEPPER = styled.div`
  ${Clearfix}

  > * {
    vertical-align: bottom;
  }

  button {
    ${ButtonReset}
    display: block;
    margin: auto;
    width: 100%;
    padding-top: 100%;
    position: relative;

    span {
      position: absolute;
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -25%);
    }

    ~ button span {
      transform: translate(-50%,-75%) rotate(180deg);
    }
  }
`;

const minusButton = `
  ${FloatRight}
  border: 0;
  width: 1.75em;
  height: 1.75em;
  position: relative;
`;

const upArrow = `
  &::before {
    content: '';
    display: inline-block;
    border-top: 1px solid black;
    border-left: 1px solid black;
    top: 50%;
    width: ${1.75 / 2}em;
    height: ${1.75 / 2}em;
    transform: rotate(45deg);
  }
`;

export const ARROWICON = styled.span`
  ${upArrow}
`;

export const ICON = styled.span`
  ${Clearfix}
  display: inline-block;

  > * {
    vertical-align: bottom;
  }
`;

export const MATHICON = styled.span`
  ${Clearfix}
  display: inline-block;

  > * {
    vertical-align: bottom;
  }
`;

export const DECREASE = styled.button`
  span {
    transform: rotate(180deg);
  }
`;

export const INCREASE = styled.button`
`;

export const INPUT = styled.input`
  ${FloatLeft}
  background: none;
  border: 0;
  width: 100%;
  height: 1.5em;
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

