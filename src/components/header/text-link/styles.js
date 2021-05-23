import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ListReset, LinkReset } from '../../../utils/Resets';
import {
  FlexCentered,
  ResponsiveLine
} from '../../../utils/Flex';
import {
  Link as GatsbyLink
} from "gatsby";
import BasicContrast from '../../../utils/BasicContrast';
import { useContext } from 'react';
import { conditionalProp, PropMap } from '../../../utils/AssessProps';
import SiteThemeContext from '../../../contexts/SiteThemeContext';

const HeaderLinkStyles = ({ primaryColor, accentContrast }) => `
  ${console.log("HeaderLinkStyles", primaryColor, accentContrast)}

  display: inline-flex;
  padding: 1em 1.5em;
  line-height: 1.33;
  height: 100%;
  min-width: 12em;
  outline-width: 0;  box-shadow: none;
  border: 0.25em solid transparent;
  text-align: center;
  transition: background-color 0.1s 0.05s, color 0.1s 0s;

  &:hover,
  &:focus {
    font-weight: bold;
    text-decoration: underline;
    color: ${primaryColor};
  }

  &.active {

  }


  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  @media screen and ${device.tablet} {
    background-color: ${primaryColor};
    color: ${accentContrast};
    padding: 0.75em;
    height: 3em;
  }
`;

const AssessProps = props => HeaderLinkStyles({
  ...useContext(SiteThemeContext),
  ...props
})

export const LINK = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}
  ${PropMap.bind(this, HeaderLinkStyles)}
`;