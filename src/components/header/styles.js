import styled from 'styled-components';
import { device } from '../../utils/variables';
import { ListReset } from '../../utils/Resets';
import FullSizeOverlay from '../../utils/FullSizeOverlay';
import {
  FlexCentered,
  ResponsiveLine
} from '../../utils/Flex';
import {
  Link,
  navigate
} from "gatsby"
import AssessProps, {
  renderText
} from '../../utils/AssessProps';

export const HEADER = styled.header`
  max-width: 100vw;
  width: 100%;
  display: grid;
  grid-template: "logo nav util" / 1fr 3fr 1fr;
  position: relative;
`;

export const LOGO = styled.div`
  grid-ara: logo;

`;

export const NAV = styled.nav`
  grid-area: nav;
  width: 100%;
  height: 100%;
`;

export const UL = styled.ul`
  ${ListReset}
  ${ResponsiveLine}
  width: 100%;
  height: 100%;

  @media ${device.tablet} {
    justify-content: ${props => props.desktopNavAlignment};
  }
`;

export const LI = styled.li`
  ${ListReset}
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
  outline: 0;
  color: ${props => props.accent};

  &:hover,
  &:active,
  &:focus {
    font-weight: bold;
  }

  border: 0.25em solid transparent;

  &:hover,
  &:active {
    background: ${props => props.accent};
    color: ${props => props.emphasis};
  }

  &:focus {
    border-color: ${props => props.accent};
  }
`;

