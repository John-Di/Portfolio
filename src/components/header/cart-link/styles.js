import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ListReset, LinkReset } from '../../../utils/Resets';
import {
  Link as GatsbyLink
} from "gatsby";
import {
  conditionalProp
} from '../../../utils/AssessProps';
import {
  FlexCentered
} from '../../../utils/Flex';
import BasicContrast from '../../../utils/BasicContrast';

const activeState = ({ accentColor }) => `
  background-color: ${accentColor};
  color: ${BasicContrast(accentColor)};
  font-weight: bold;
  text-decoration: underline;

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
  transition: background-color 0.1s 0.05s, color 0.1s 0s;
  margin-left: auto;

  ${({ state }) => conditionalProp(state.isActive, activeState(state))}

  &.active,
  &:active,
  &:hover,
  &:focus {
    ${({ state }) => activeState(state)}
  }

  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  svg {

    @media screen and ${device.tablet} {
    }
  }
`;

export const CHECKOUT = styled.a`
  ${LinkReset}
  ${FlexCentered}

  display: inline-flex;
  line-height: 1.33;
  height: 100%;
  outline-width: 0;
  box-shadow: none;
  border: 0.25em solid transparent;
  transition: background-color 0.1s 0.05s, color 0.1s 0s;

  &:hover,
  &:focus {
    font-weight: bold;
    text-decoration: underline;
  }

  ${props => conditionalProp(props.isActive, `
    background-color: ${props => props.accentColor};
    color: ${props => BasicContrast(props.accentColor)};
    font-weight: bold;
    text-decoration: underline;

    svg {
      color: ${props => BasicContrast(props.accentColor)};
      fill: ${props => BasicContrast(props.accentColor)};
    }

    span::after {
      background: ${props => BasicContrast(props.accentColor)};
      color: ${props => props.accentColor};
    }
  `)}
  &:active,
  &:hover,
  &:focus {
    background-color: ${props => props.accentColor};
    color: ${props => BasicContrast(props.accentColor)};
    font-weight: bold;
    text-decoration: underline;

    svg {
      color: ${props => BasicContrast(props.accentColor)};
      fill: ${props => BasicContrast(props.accentColor)};
    }

    span::after {
      background: ${props => BasicContrast(props.accentColor)};
      color: ${props => props.accentColor};
    }
  }


  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  svg {
    transform: scale(-1,1);

    @media screen and ${device.tablet} {
      width: 2em;
      height: 2em;
    }
  }
`;

export const ICON = styled.span`
  ${FlexCentered}
  position: relative;

  svg {
    transform: scale(-1,1);
    ${({ cartCount, accentColor }) => conditionalProp(cartCount === 0, `
      color: black;
      fill: black;
    `, `
      color: ${accentColor};
      fill: ${accentColor};
    `)}
    color: black;
    fill: black;
  }

  &::after {
    ${FlexCentered}
    content: '${({ cartCount }) => cartCount}';
    position: relative;
    font-size: 0.75em;
    width: ${({ cartCount }) => conditionalProp(cartCount > 99, 2.5, 1.5)}em;
    height: ${({ cartCount }) => conditionalProp(cartCount > 99, 2, 1.5)}em;
    line-height: 1;
    position: absolute;
    bottom: ${100 * 2 / 3}%;
    left: ${({ cartCount }) => conditionalProp(cartCount > 99, 100 * 3 / 5, 100 * 3 / 4)}%;
    overflow: hidden;
    border-radius: 50%;
    background: ${({ accentColor }) => accentColor};
    color: ${({ textColor }) => textColor};
  }
`;


// span::after {
//   background: ${accentContrast};
//   color: ${primaryColor};

//   @media screen and ${device.tablet} {
//     color: ${primaryColor};
//     fill: ${primaryColor};
//   }
// }