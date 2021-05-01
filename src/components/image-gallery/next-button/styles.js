import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { conditionalProp } from '../../../utils/AssessProps';
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

export const NEXT = styled.button`
  ${GALLERY_NAV_BUTTON}
  ${props => responsiveBreakpoints([device.max_mobileXL, [device.laptop, device.max_laptopL].join(' and ')], `
    ${conditionalProp(props.buttonPadding, `right: -0.0625em;`, `display: none;`)}
  `)}

  ${() => responsiveBreakpoints([[device.mobileXL, device.max_laptop].join(' and '), device.laptopL], `left: calc(100% + 1em);`)}

  ${props => conditionalProp(props.isDisabled, `display: none;`)}
`;