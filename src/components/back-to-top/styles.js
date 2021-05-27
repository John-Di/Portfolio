import React, { useContext } from 'react';
import styled from 'styled-components';
import SiteThemeContext from '../../contexts/SiteThemeContext';
import {
  PropMap,
  conditionalProp
} from '../../utils/AssessProps';
import BasicContrast from '../../utils/BasicContrast';
import { ButtonReset } from '../../utils/Resets';
import { device } from '../../utils/variables';

const width = 3;

const assessWrapper = ({ isActive = false }) => conditionalProp(isActive, `
  transform: translateY(0%);
`);

const assessTrigger = ({ isActive, lineColor, backgroundColor, accentColor }) => `
  background-color: transparent;
  ${PropMap.bind(this, undefined)}
  ${conditionalProp(lineColor, `
    border-color: ${lineColor};

    ${conditionalProp(isActive, `
      &:hover,
      &:focus,
      &:active {
        ${conditionalProp(backgroundColor, `background-color: ${BasicContrast(lineColor)}`, `background-color: ${BasicContrast(lineColor)}`)};
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
  right: 0.25em;
  font-size: ${width}em;
  width: 1em;
  height: 1em;
  transform: translateY(1000%);
  transition: transform ${1 / 2.5}s;
  ${assessWrapper}

  @media screen and ${device.tablet} {
    right: 1em;
  }
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
