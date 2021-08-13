import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import { LinkReset, ListReset } from '../../utils/Resets';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';
import { ChicDropdownStyles } from '../../styles/Dropdowns';

const assessTheme = ({ theme, ...props }) => {
  switch (theme) {
    case 'chic':
    default:
      return ChicDropdownStyles(props);
  }
};

export const NAV = styled.nav`
  @media screen and ${device.laptop} {
    margin: auto;
    max-width: ${size.laptopL}px;
  }

  padding-bottom: 27em;

  select {
    ${assessTheme}
  }
`;

export const UL = styled.ul`
  ${ListReset}
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  margin: -0.5em auto;
  ${Clearfix}
`;

export const CHECKBOXLIST = styled.li`
  ${ListReset}
  margin: 0.5em 0;
`;

export const DROPDOWN = styled.li`
  ${ListReset}
  float: left;
  list-style: none;
  margin-right: 10px;
  position: relative;
  z-index: 1;
  width: auto;
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

