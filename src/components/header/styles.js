import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/variables';
import { ButtonReset, ListReset, LinkReset } from '../../utils/Resets';
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
  transition: background-color 0.1s 0.1s;

  ${props => conditionalProp(props.isMenuOpen, `
    background-color: white;
    transition: background-color 0.1s 0s;
    box-shadow: 0 1px 1px grey;
  `)}


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

export const TOGGLE = styled.button`
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

export const ICON = styled(FontAwesomeIcon)`
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
    overflow: hidden;
    transition: height 0.1s 0s;

    ${props => conditionalProp(props.isMenuOpen && props.height, `
      transition: height 0.1s 0.05s;
      height: ${props.height}px;
    `)};
  }
`;

export const UL = styled.ul`
  ${ListReset}
  ${ResponsiveLine}
  width: 100%;

  @media ${device.max_tablet} {
    background: white;
    transition: height 2s 0s;
  }

  @media ${device.tablet} {
    justify-content: ${props => props.desktopNavAlignment};
  }
`;


export const LI = styled.li`
  ${ListReset}

  a {
    color: ${props => props.accentColor};
    border: 0.25em solid transparent;

    &:hover,
    &:active,
    &:focus,
    &.active {
      font-weight: bold;
    }

    @media ${device.max_tablet} {
      align-items: flex-start;
      width: 100%;
    }

    @media ${device.tablet} {
      color: ${props => props.textColor};

      &:hover,
      &:active,
      &.active {
        background: ${props => props.backgroundColor};
        color: ${props => props.textColorEmphasis};
      }

      &:focus {
        border-color: ${props => props.accentColor};
      }
    }
  }

  @media ${device.max_tablet} {
    width: 100%;
  }
`;

export const UTIL = styled.nav`

`;

export const NAVLINK = styled(Link)`
  ${LinkReset}
  ${FlexCentered}
  display: inline-flex;
  padding: 1em 1.5em;
  line-height: 1.33;
  height: 100%;
  min-width: 9em;
  outline-width: 0;
  box-shadow: none;
`;

