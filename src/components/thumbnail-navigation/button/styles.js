import styled from 'styled-components';
import { device, size } from '../../../utils/variables';
import { conditionalProp, PropMap } from '../../../utils/AssessProps';
import { ButtonReset } from '../../../utils/Resets';
import { responsiveBreakpoints } from '../../../styles/util';

const BUTTON_WIDTH = 3;

const GALLERY_NAV_BUTTON = `
  ${ButtonReset}
  cursor: pointer;
  padding: 0;
  min-width: unset;
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${BUTTON_WIDTH}em;
  transition: opacity 0.1s, background-color 0.1s, color 0.1s;
  opacity: 0.25;

  &:hover,
  &:focus {
    opacity: 1;
  }
  &[disabled] {
    display: none;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    fill: inherit;
    color: inherit;
  }
`;

const sideBySide = [[device.mobileXL, device.max_laptop].join(' and '), device.laptopL],
  stacked = [device.max_mobileXL, [device.laptop, device.max_laptopL].join(' and ')];

const AssessProps = ({ isPrev, buttonInside, isDisabled, hideForce = true }) => `
  ${responsiveBreakpoints(stacked, `
    ${conditionalProp(buttonInside, `${isPrev ? `left` : `right`}: -0.0625em;`)}
    ${conditionalProp(hideForce, `display: none;`)}
  `)}

  ${responsiveBreakpoints(sideBySide,
  conditionalProp(
    buttonInside,
    `${isPrev ? `left` : `right`}: 0;`,
    `${!isPrev ? `left` : `right`}: calc(100% + 1em);`)
)}

  ${conditionalProp(isDisabled, `display: none;`)}
`

export const BUTTON = styled.button`
  ${GALLERY_NAV_BUTTON}
  ${PropMap.bind(this, null)}
`;
