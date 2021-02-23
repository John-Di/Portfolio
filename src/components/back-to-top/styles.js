import styled from 'styled-components';
import AssessProps, {
  conditionalProp
} from '../../utils/AssessProps';
import IdealTextColor from '../../utils/IdealTextColor';
import { ButtonReset } from '../../utils/Resets';

const width = 3;

const assessWrapper = ({ isActive = false }) => conditionalProp(isActive, `
  transform: translateY(0%);
`);

const assessTrigger = ({ isActive, lineColor, backgroundColor, accentColor }) => `
  background-color: transparent;
  ${AssessProps}
  ${conditionalProp(lineColor, `
    border-color: ${lineColor};

    ${conditionalProp(isActive, `
      &:hover,
      &:focus,
      &:active {
        ${conditionalProp(backgroundColor, `background-color: ${IdealTextColor(lineColor)}`, `background-color: ${IdealTextColor(lineColor)}`)};
        border-color: ${lineColor};
        color: ${lineColor};
        box-shadow: 0 0 0 1pt ${lineColor};
      }
  `)}
`)}
`
export const WRAPPER = styled.div`
  position: fixed;
  bottom: 2em;
  right: 1em;
  font-size: ${width}em;
  width: 1em;
  height: 1em;
  transform: translateY(1000%);
  transition: transform ${1 / 2.5}s;
  ${assessWrapper}
`;

export const TRIGGER = styled.button`
  ${ButtonReset}
  display: block;
  cursor: pointer;
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: black 1pt solid;
  padding: 0.25em;
  transition: box-shadow ${1 / 12}s;
  ${assessTrigger}

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: inherit;
    color: inherit;
  }
`;
