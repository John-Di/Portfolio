import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ButtonReset, ListReset, LinkReset } from '../../../utils/Resets';
import FullSizeOverlay from '../../../utils/FullSizeOverlay';
import {
  conditionalProp, PropMap
} from '../../../utils/AssessProps';
import {
  FlexCentered,
  ResponsiveLine
} from '../../../utils/Flex';


const ToggleTransitions = ({ isActive, primaryColor, primaryContrast }) => `
  svg {
    color: ${primaryColor};
    fill: ${primaryColor};
  }

  &:focus {
    outline: 0.125em solid ${primaryColor};
  }

  ${conditionalProp(isActive, `
  &,`)}
  &:hover {
    background-color: ${primaryColor};
    svg {
      color: ${primaryContrast};
      fill: ${primaryContrast};
    }
  }
`;

export const MENU = styled.div`
  grid-area: nav;
  width: 100%;
  height: 100%;
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  ${FlexCentered}
  cursor: pointer;
  ${PropMap.bind(this, ToggleTransitions)}
  transition: background-color 0.25s 0s, color 0.25s 0s;

  @media screen and ${device.tablet} {
    display: none;
  }
`;

const headerShadowHeight = 3;

const MobileNav = ({
  flyoutHeight,
  isMenuOpen
}) => `
  position: absolute;
  height: ${(flyoutHeight + headerShadowHeight) / 16}em;
  left: 0;
  right: 0;
  overflow: hidden;

  ul {
    position: absolute;
    top: -${flyoutHeight / 16}em;
    transition: top 0.25s 0s;
    box-shadow: 0 0 1px rgba(0,0,0,0.2);
  }

  ${conditionalProp(isMenuOpen, `
    &::before {
      opacity: 1;
    }

    ul {
      top: 0;
      box-shadow: 0 ${headerShadowHeight}px 1px rgba(0,0,0,0.2);
    }
  `, `
    pointer-events: none;
  `)};
`;

export const NAV = styled.nav`
  width: 100%;
  height: 100%;

  @media screen and ${device.max_tablet} {
    ${PropMap.bind(this, MobileNav)}
  }
`;

export const ITEMS = styled.ul`
  ${ListReset}
  ${ResponsiveLine}
  width: 100%;

  @media screen and ${device.max_tablet} {
    background: white;
  }

  @media screen and ${device.tablet} {
    height: 100%;
    justify-content: ${props => props.desktopNavAlignment};
  }

  li {
    margin-bottom: 0;
  }
`;

export const ITEM = styled.li`
  ${ListReset}

  @media screen and ${device.max_tablet} {
    width: 100%;
  }

  @media screen and ${device.tablet} {
    height: 100%;
  }

  > a {
    width: 100%;
    width: 4em;
  }
`;

