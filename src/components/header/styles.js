import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/variables';
import { ButtonReset, ListReset } from '../../utils/Resets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import VisuallyHidden from '../../utils/VisuallyHidden';
import {
  conditionalProp
} from '../../utils/AssessProps';
import {
  FlexCentered,
  ResponsiveLine
} from '../../utils/Flex';
import {
  Link
} from "gatsby";

export const HEADER = styled.header`
  max-width: 100vw;
  width: 100%;
  display: grid;
  grid-template: "nav logo util" / 6em 1fr 6em;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: transparent;
  transition: background-color 0.1s ease-in 0s;
  ${props => conditionalProp(props.isMenuOpen, `background-color: white;`)}


  @media ${device.tablet} {
    grid-template: "logo nav util" / 1fr 3fr 1fr;

    &:hover {
      ${props => conditionalProp(props.whiteOnHover, `background-color: white;`)}

      @media ${device.tablet} {
        cursor: pointer;
      }

      a {
        ${props => conditionalProp(props.whiteOnHover, `color: ${props.backgroundColor};`)}
      }
    }
  }
`;

export const Toggle = styled.button`
  ${ButtonReset}
  ${FlexCentered}
  width: 3em;
  height: 3em;
  padding: 0.75em;
  color: ${props => props.textColor};
  cursor: pointer;

  @media ${device.tablet} {
    display: none;
  }
`;

export const LOGO = styled.div`
  grid-ara: logo;

`;

export const Icon = styled(FontAwesomeIcon)`
  height: 100%;
  width: 100%;
  fill: inherit;
  color: inherit;
  font-size: 2em;
`;

export const NAV = styled.nav`
  grid-area: nav;
  width: 100%;
  height: 100%;
`;

export const DIV = styled.div`
  width: 100%;

  @media ${device.max_tablet} {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    height: 0;
    animation-duration: 0.1s;
    animation-delay: 0s;
    animation-iteration-count: 1;
    animation-direction: reverse;
    overflow: hidden;
    transition: height 0.1s ease-in 0.1s;

    ${props => conditionalProp(props.isMenuOpen, `
      animation-name: expandMenuDrawer;
      transition: height 0.1s ease-in 0s;
      animation-direction: normal;
      height: calc(100vh - 3em);
    `)}
  }
`;

export const UL = styled.ul`
  ${ListReset}
  ${ResponsiveLine}
  width: 100%;

  @media ${device.max_tablet} {
    background: white;
    animation-duration: 0.1s;
    animation-delay: 0.1s;
    animation-iteration-count: 1;
    animation-direction: reverse;
    transform: translateY(-100%);
    transition: transform 0.1s ease-in 0s;

    ${props => conditionalProp(props.isMenuOpen, `
    transition: transform 0.1s ease-in 0.1s;
      animation-name: scrollDrawDown;
      animation-direction: normal;
      transform: translateY(0);
    `)}

  }

  @media ${device.tablet} {
    justify-content: ${props => props.desktopNavAlignment};
  }
`;


export const LI = styled.li`
  ${ListReset}
  @media ${device.max_tablet} {
    width: 100%;
  }
`;

export const UTIL = styled.nav`

`;

export const NavLink = styled(Link)`
  ${FlexCentered}
  display: inline-flex;
  padding: 1em 1.5em;
  line-height: 1.33;
  height: 100%;
  min-width: 9em;
  outline: none;
  color: ${props => props.accentColor};

  &:hover,
  &:active,
  &:focus,
  &.active {
    font-weight: bold;
  }

  border: 0.25em solid transparent;
  @media ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  @media ${device.tablet} {
    color: ${props => props.textColor};

    &:hover,
    &:active,
    &.active {
      background: ${props => props.accentColor};
      color: ${props => props.textColorEmphasis} !important;
    }

    &:focus {
      border-color: ${props => props.accentColor};
    }
  }
`;

