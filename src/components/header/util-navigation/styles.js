import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ListReset, LinkReset } from '../../../utils/Resets';
import {
  conditionalProp
} from '../../../utils/AssessProps';
import {
  FlexCentered,
  ResponsiveLine
} from '../../../utils/Flex';
import {
  Link as GatsbyLink
} from "gatsby";

export const ITEMS = styled.ul`
  ${ListReset}
  ${ResponsiveLine}
  align-items: stretch;
  width: 100%;
  height: 100%;

  @media screen and ${device.max_tablet} {
    background: white;
    transition: height 2s 0s;
  }

  @media screen and ${device.tablet} {
    justify-content: ${props => props.desktopNavAlignment};
  }

  li {
    margin-bottom: 0;
  }
`;

export const ITEM = styled.li`
  ${ListReset}
  height: 100%;

  @media screen and ${device.max_tablet} {
    width: 100%;
  }
`;

export const UTIL = styled.nav`
  grid-area: util;
  width: 100%;
  height: 100%;
`;

export const EXTERNAL = styled.a`
  ${LinkReset}
  ${FlexCentered}
  ${props => conditionalProp('props.cartIsempty', props.cartIsEmpty)}
  ${props => conditionalProp(!props.cartIsEmpty, `
    color: black;
    fill: black;
  `, `
    color: ${props.color};
    fill: ${props.color};
  `)}

  display: inline-flex;
  padding: 1em 1.5em;
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

  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  svg {
    width: 2em;
    height: 2em;
    transform: scale(-1,1);
  }
`;

export const LINK = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}
  ${props => conditionalProp(!props.state.cartIsEmpty, `
    color: black;
    fill: black;
  `, `
    color: ${props.state.color};
    fill: ${props.state.color};
  `)}

  display: inline-flex;
  padding: 1em 1.5em;
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

  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }
`;

export const ICON = styled.span`
  ${FlexCentered}
  position: relative;

  &::after {
    ${FlexCentered}
    content: '${({ cartCount = 0 }) => cartCount}';
    font-size: 0.75em;
    width: 1.5em;
    height: 1.5em;
    position: absolute;
    bottom: ${100 * 2 / 3}%;
    left: ${100 * 3 / 4}%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 50%;
    background: ${({ accentColor }) => accentColor};
    color: ${({ textColor }) => textColor};
  }
`;