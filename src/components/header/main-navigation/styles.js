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


const ToggleTransitions = ({ isActive, iconColor, iconColorEmphasis }) => `
  color: ${iconColor};

  ${conditionalProp(isActive,
  `color: ${iconColorEmphasis};`)}
`;

export const MENU = styled.div`
  grid-area: nav;
  width: 100%;
  height: 100%;
`;

export const TOGGLE = styled.button`
  ${ButtonReset}
  ${FlexCentered}
  width: 3em;
  height: 3em;
  cursor: pointer;
  ${ToggleTransitions}
  transition: color 0.1s 0.05s;

  @media screen and ${device.tablet} {
    display: none;
  }
`;

const MobileNav = ({
  height,
  isMenuOpen
}) => `
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
    ${conditionalProp(height, `top: ${height}px;`)}
  }

  ${conditionalProp(isMenuOpen && height, `
    transition: height 0.1s 0.1s;
    height: ${height}px;

    &::before {
      opacity: 1;
    }
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
    transition: height .1s 0s;
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
    height: 4em;
    width: 100%;

    @media screen and ${device.tablet} {
      width: 4em;
    }
  }
`;

