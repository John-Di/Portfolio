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
  display: inline-block;
  ${Clearfix}

  @media screen and ${device.laptop} {
    margin: auto;
    max-width: ${size.laptopL}px;
  }
`;


export const DROPDOWN = styled.div`
  ${ListReset}
  list-style: none;
  position: relative;
  z-index: 1;
  width: auto;

  > div {
    margin-left: auto;
  }
`;


