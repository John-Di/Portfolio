import styled, { keyframes } from 'styled-components';
import { device } from '../../utils/variables';
import { ButtonReset, ListReset, LinkReset } from '../../utils/Resets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Transition from '../../utils/Transition';
import {
  conditionalProp
} from '../../utils/AssessProps';
import {
  FlexCentered,
  ResponsiveLine
} from '../../utils/Flex';
import {
  Link as GatsbyLink
} from "gatsby";
import IdealTextColor from '../../utils/IdealTextColor';

const WhiteHeader = (textColor, linkHoverProps, linkActiveProps) => Transition({
  backgroundColor: `white`,
  transition: `background-color 0.1s 0.1s, box-shadow 0.1s 0.05s`,
  states: [`&:hover`, `&focus`],
  onState: `
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

    a {
      color: ${textColor};
      ${linkHoverProps}

      &:hover,
      &:focus {
        text-decoration: underline;
        ${linkActiveProps}
      }
    }
  `
});

const HeaderTabletProps = ({ whiteOnHover, textColor, accentColor }) => conditionalProp(
  whiteOnHover, WhiteHeader(
    accentColor,
    assessNAVLINKProps(accentColor, textColor, accentColor),
    assessNAVLINKProps(accentColor, textColor, accentColor, [`&:active`, `&.active`])));


const assessNAVLINKProps = (textColor, textColorEmphasis, backgroundColor = '', states = [`&:hover`, `&:active`, `&.active`, `&focus`]) => Transition({
  textColor,
  backgroundColor,
  textColorEmphasis,
  states
})

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

  ${props => conditionalProp(props.isMenuOpen, `
    box-shadow: 0 1px 1px grey;

    @media ${device.max_tablet} {
      background-color: white;

      &:hover {
        box-shadow: 0 1px 1px grey;
        transition: background-color 0.1s 0s;
        background-color: white;
      }
    }
  `)}

  @media ${device.tablet} {
    cursor: pointer;
    grid-template: "logo nav util" / 1fr 3fr 1fr;
    ${HeaderTabletProps}
  }
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  ${FlexCentered}
  width: 3em;
  height: 3em;
  padding: 0.75em;
  color: ${props => props.iconColor};
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
      transition: height 0.1s 0.1s;
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

const AssessLIProps = ({ accentColor, textColor }) => `
  &:active,
  &.active {
    background-color: ${textColor};
    color: ${accentColor};
  }
`;

export const LI = styled.li`
  ${ListReset}

  a {
    color: ${props => props.textColor};
    border: 0.25em solid transparent;
    transition: background-color 0.1s 0.05s, color 0.1s 0.05s;

    &:hover,
    &:active,
    &:focus,
    &.active {
      font-weight: bold;
    }

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    @media ${device.max_tablet} {
      align-items: flex-start;
      width: 100%;
    }

    @media ${device.tablet} {
      ${AssessLIProps}
    }
  }

  @media ${device.max_tablet} {
    width: 100%;
  }
`;

export const UTIL = styled.nav`

`;

export const NAVLINK = styled(GatsbyLink)`
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

