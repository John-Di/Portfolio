import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { LinkReset } from '../../../utils/Resets';
import {
  Link as GatsbyLink
} from "gatsby";
import {
  conditionalProp, PropMap
} from '../../../utils/AssessProps';
import {
  FlexCentered
} from '../../../utils/Flex';

const activeState = ({ primaryColor, primaryContrast }) => `
  background: ${primaryContrast};
  color: ${primaryColor};
`;

export const CART = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}
  display: inline-flex;
  line-height: 1.33;
  height: 100%;
  outline-width: 0;
  box-shadow: none;
  border: 0.25em solid transparent;
  transition: background-color 0.25s 0.05s, color 0.25s 0s;
  margin-left: auto;

  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  ${({ state }) => PropMap(IconStyles, state)}
`;


const IconStyles = ({
  cartCount,
  primaryColor,
  primaryContrast
}) => `
  svg {
    color: ${primaryColor};
    fill: ${primaryColor};
    transform: scale(-1,1);
  }

  span::after {
    background: ${primaryColor};
    color: ${primaryContrast};
    ${FlexCentered}
    content: '${cartCount}';
    position: relative;
    font-size: 0.75em;
    width: ${conditionalProp(cartCount > 99, 2.5, 1.5)}em;
    height: ${conditionalProp(cartCount > 99, 2, 1.5)}em;
    line-height: 1;
    position: absolute;
    bottom: ${100 * 2 / 3}%;
    left: ${conditionalProp(cartCount > 99, 100 * 3 / 5, 100 * 3 / 4)}%;
    overflow: hidden;
    border-radius: 50%;
  }

  &:focus {
    outline: 0.125em solid ${primaryColor};
  }

  &:active,
  &.active {
    &,
    &:hover,
    &:focus {
      svg {
        color: ${primaryContrast};
        fill: ${primaryContrast};
      }

      span::after {
        background: ${primaryContrast};
        color: ${primaryColor};
      }
    }
  }
`

export const ICON = styled.span`
  ${FlexCentered}
  position: relative;
`;