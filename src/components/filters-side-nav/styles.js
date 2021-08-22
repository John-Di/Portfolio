import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import { LinkReset, ListReset } from '../../utils/Resets';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';
import { ChicDropdownStyles } from '../../styles/Dropdowns';
import { conditionalProp } from '../../utils/AssessProps';

const assessTheme = ({ theme, ...props }) => {
  switch (theme) {
    case 'chic':
    default:
      return ChicDropdownStyles(props);
  }
};

export const NAV = styled.nav`
  background: white;
  height: 100%;
  padding: 2em;
  z-index: 1;
  transition: left 0.25s, opacity 0.1s 0.25s;

  ${props => conditionalProp(props.isOpen, `
    left: 0;
    transition: right 0.25s, opacity 0.1s 0s;
    opacity: 1;
  `, `
    left: -100vw;

    @media screen and ${device.laptop} {
      left: calc(0% - ${size.mobileM / 16 + 1}em);
      opacity: 0;
    }
  `)}
`;

export const UL = styled.ul`
  ${ListReset}
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  margin-right: auto;
  ${Clearfix}
`;

export const CHECKBOXLIST = styled.li`
  ${ListReset}

  &:not(:last-of-type) {
    margin-bottom: 2em;
  }

  button,
  label {
    padding: 0.5em;
  }

  ul {
    margin-top: 0.5em;
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

