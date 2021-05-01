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
import IdealTextColor from '../../../utils/IdealTextColor';

export const CART = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}
  ${props => conditionalProp('props.cartIsempty', props.state.cartIsEmpty)}
  ${props => conditionalProp(!props.state.cartIsEmpty, `
    color: black;
    fill: black;
  `, `
    color: ${props.state.accentColor};
    fill: ${props.state.accentColor};
  `)}

  display: inline-flex;
  line-height: 1.33;
  height: 100%;
  outline-width: 0;
  box-shadow: none;
  border: 0.25em solid transparent;
  transition: background-color 0.1s 0.05s, color 0.1s 0s;
  margin-left: auto;

  &:hover,
  &:focus {
    font-weight: bold;
    text-decoration: underline;
  }

  ${props => conditionalProp(props.state.isActive, `
    background-color: ${props => props.state.accentColor};
    color: ${props => IdealTextColor(props.state.accentColor)};
    font-weight: bold;
    text-decoration: underline;

    svg {
      color: ${props => IdealTextColor(props.state.accentColor)};
      fill: ${props => IdealTextColor(props.state.accentColor)};
    }

    span::after {
      background: ${props => IdealTextColor(props.state.accentColor)};
      color: ${props => props.state.accentColor};
    }
  `)}

  &.active,
  &:active,
  &:hover,
  &:focus {
    background-color: ${props => props.state.accentColor};
    color: ${props => IdealTextColor(props.state.accentColor)};
    font-weight: bold;
    text-decoration: underline;

    svg {
      color: ${props => IdealTextColor(props.state.accentColor)};
      fill: ${props => IdealTextColor(props.state.accentColor)};
    }

    span::after {
      background: ${props => IdealTextColor(props.state.accentColor)};
      color: ${props => props.state.accentColor};
    }
  }


  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  svg {
    transform: scale(-1,1);

    @media screen and ${device.tablet} {
    }
  }
`;

export const CHECKOUT = styled.a`
  ${LinkReset}
  ${FlexCentered}
  ${props => conditionalProp('props.cartIsempty', props.cartIsEmpty)}
  ${props => conditionalProp(!props.cartIsEmpty, `
    color: black;
    fill: black;
  `, `
    color: ${props.accentColor};
    fill: ${props.accentColor};
  `)}

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
    color: ${props => IdealTextColor(props.accentColor)};
    font-weight: bold;
    text-decoration: underline;

    svg {
      color: ${props => IdealTextColor(props.accentColor)};
      fill: ${props => IdealTextColor(props.accentColor)};
    }

    span::after {
      background: ${props => IdealTextColor(props.accentColor)};
      color: ${props => props.accentColor};
    }
  `)}
  &:active,
  &:hover,
  &:focus {
    background-color: ${props => props.accentColor};
    color: ${props => IdealTextColor(props.accentColor)};
    font-weight: bold;
    text-decoration: underline;

    svg {
      color: ${props => IdealTextColor(props.accentColor)};
      fill: ${props => IdealTextColor(props.accentColor)};
    }

    span::after {
      background: ${props => IdealTextColor(props.accentColor)};
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

  &::after {
    ${FlexCentered}
    content: '${({ cartCount }) => cartCount}';
    font-size: 0.75em;
    width: 1.5em;
    height: 1.5em;
    line-height: 1;
    position: absolute;
    bottom: ${100 * 2 / 3}%;
    left: ${100 * 3 / 4}%;
    overflow: hidden;
    border-radius: 50%;
    background: ${({ accentColor }) => accentColor};
    color: ${({ textColor }) => textColor};
  }
`;