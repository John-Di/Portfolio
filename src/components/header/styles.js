import styled from 'styled-components';
import { device } from '../../utils/variables';
import { ButtonReset, ListReset, LinkReset } from '../../utils/Resets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FullSizeOverlay from '../../utils/FullSizeOverlay';
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

const HeaderTabletProps = ({ whiteOnHover, textColor, accentColor }) => `
  background-color: white;
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

  a {
    background-color: transparent;
    color: ${`#000000`};

    &:hover,
    &:focus {
      color: ${accentColor};
      font-weight: bold;
      text-decoration: underline;
    }

    &:active,
    &.active {
      color: ${accentColor};
    }

    ${conditionalProp(whiteOnHover, `
      &:active,
      &.active {
        &,
        &:hover,
        &:focus {
          background-color: ${accentColor};
          color: ${textColor};
        }
      }
    `)}
  }
`;

const HeaderMobileProps = ({ isMenuOpen, textColor, accentColor }) => conditionalProp(isMenuOpen, `
  background-color: white;
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

  a {
    background-color: transparent;
    color: ${`#000000`};

    &:hover,
    &:focus {
      color: ${accentColor};
      font-weight: bold;
      text-decoration: underline;
    }

    &:active,
    &.active {
      color: ${accentColor};
    }

    &:active,
    &.active {
      &,
      &:hover,
      &:focus {
        background-color: ${accentColor};
        color: ${textColor};
      }
    }
  }
`);

const onStuck = ({ whiteOnHover, textColor, accentColor, isStuck }) => conditionalProp(isStuck, `
  background-color: white;
  box-shadow: 0 3px 1px rgba(0,0,0,0.2);
  transition: background-color 0.1s 0.1s, box-shadow 0.1s 0.05s;

  @media ${device.max_tablet} {
    a {
      background-color: transparent;
      color: ${`#000000`};

      &:hover,
      &:focus {
        color: ${accentColor};
        font-weight: bold;
        text-decoration: underline;
      }

      &:active,
      &.active {
        color: ${accentColor};
      }

      ${conditionalProp(whiteOnHover, `
        &:active,
        &.active {
          &,
          &:hover,
          &:focus {
            background-color: ${accentColor};
            color: ${textColor};
          }
        }
      `)}
    }
  }

  @media ${device.tablet} {
    a {
      background-color: transparent;
      color: ${`#000000`};

      &:hover,
      &:focus {
        color: ${accentColor};
        font-weight: bold;
        text-decoration: underline;
      }

      &:active,
      &.active {
        background-color: ${textColor};
        color: ${accentColor};
      }

      &:active,
      &.active {
        &,
        &:hover,
        &:focus {
          background-color: ${accentColor};
          color: ${textColor};
        }
      }
    }
  }
`);

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
  top: -1px;
  padding-top: 1px;

  a {
    color: ${props => props.textColor};

    &:active,
    &.active {
      color: ${props => props.accentColor};

      @media ${device.tablet} {
        background-color: ${props => props.textColor};
      }
    }
  }

  ${onStuck}

  @media ${device.max_tablet} {
    ${HeaderMobileProps}
  }

  @media ${device.tablet} {
    cursor: pointer;
    grid-template: "logo nav util" / 1fr 3fr 1fr;
    ${props => props.isActive ? HeaderTabletProps : null}

    ${props => conditionalProp(props.whiteOnHover, `
      &:hover,
      &focus {
        ${HeaderTabletProps}
      }
    `)}
  }
`;


const ToggleTransitions = ({ isActive, iconColor, iconColorEmphasis }) => `
  color: ${iconColor};

  ${conditionalProp(isActive,
  `color: ${iconColorEmphasis};`)}
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  ${FlexCentered}
  width: 3em;
  height: 3em;
  padding: 0.75em;
  cursor: pointer;
  ${ToggleTransitions}
  transition: color 0.1s 0.05s;

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

    &::before {
      opacity: 0;
      z-index: -1;
      background-color: rgba(0,0,0,0.5);
      ${FullSizeOverlay}
      position: fixed;
      transition: opacity 0.1s 0.05s;
      ${props => conditionalProp(props.height, `top: ${props.height}px;`)}
    }

    ${props => conditionalProp(props.isMenuOpen && props.height, `
      transition: height 0.1s 0.1s;
      height: ${props.height}px;

      &::before {
        opacity: 1;
      }
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

  @media ${device.max_tablet} {
    width: 100%;
  }
`;

export const NAVLINK = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}

  display: inline-flex;
  padding: 1em 1.5em;
  line-height: 1.33;
  height: 100%;
  min-width: 12em;
  outline-width: 0;
  box-shadow: none;
  border: 0.25em solid transparent;
  transition: background-color 0.1s 0.05s, color 0.1s 0s;

  &:hover,
  &:focus {
    font-weight: bold;
    text-decoration: underline;
  }

  @media ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }
`;

