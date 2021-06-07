import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import { LinkReset, ListReset } from '../../utils/Resets';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';


export const NAV = styled.nav`
  display: block;
  width: 100%;
  padding: 0.5em;

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
  display: inline-block;
  position: relative;
  vertical-align: middle;
  line-height: 1.33;
  float: left;
  padding: 0.5em;

  &:not(:last-child) {
    margin-right: 1em;

    &::after {
      content: '>';
      position: absolute;
      left: 100%;
      width: 1em;
      text-align: center;
    }
  }
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