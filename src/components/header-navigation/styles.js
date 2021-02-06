import styled from 'styled-components';
import { device } from '../../utils/variables';
import { ButtonReset, ListReset, LinkReset } from '../../utils/Resets';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  min-width: 9.5em;
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
