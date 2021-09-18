import styled from 'styled-components';
import {
  Link as GatsbyLink
} from "gatsby";
import { LinkReset, ListReset } from '../../utils/Resets';
import Clearfix from '../../utils/Clearfix';
import { device, size } from '../../utils/variables';
import { ChicDropdownStyles } from '../../styles/Dropdowns';
import { conditionalProp } from '../../utils/AssessProps';


export const NAV = styled.nav`
  background: white;
  height: 100%;
  padding: 1em;
  z-index: 1;
  position: absolute;
  left: 0;
  transition: left 0.25s, opacity 0.1s 0.25s;

  ${props => conditionalProp(props.isOpen, `
    left: 0;
    transition: right 0.25s, opacity 0.1s 0s;
    opacity: 1;
    pointer-events: auto;
  `, `

    @media screen and ${device.max_laptop} {
      left: calc(0% - ${size.mobileM / 16 + 1}em);
      opacity: 0;
    }
  `)}

  @media screen and ${device.laptop} {
    padding: 1em;
    position: relative;
    opacity: 1;
  }
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

