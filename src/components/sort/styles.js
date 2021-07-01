import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import { LinkReset, ListReset } from '../../utils/Resets';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';


export const NAV = styled.nav`
  position: fixed;
  display: block;
  width: 50%;
  left: 50%;
  padding: 0.5em;
  background: red;
  bottom:0;
  z-index:9;

  @media screen and ${device.laptop} {
    margin: auto;
    max-width: ${size.laptopL}px;
  }
`;

export const UL = styled.ul`
  ${ListReset}
  width: 100%;
  ${Clearfix}
`;

export const LI = styled.li`
  ${ListReset}
  zoom: 1.25;
`;

export const SPAN = styled.span`
  font-weight: bold;
`;

export const LINK = styled(GatsbyLink)`
  ${LinkReset}

  &:active,
  .active {
    font-weight: bold;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;