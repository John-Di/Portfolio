import styled from 'styled-components';
import { device } from '../../../utils/variables';
import { ListReset, LinkReset } from '../../../utils/Resets';
import {
  conditionalProp
} from '../../../utils/AssessProps';
import {
  FlexCentered,
  ResponsiveLine
} from '../../../utils/Flex';
import {
  Link as GatsbyLink
} from "gatsby";
import BasicContrast from '../../../utils/BasicContrast';

export const LINK = styled(GatsbyLink)`
  ${LinkReset}
  ${FlexCentered}

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
    color: ${props => props.accentColor};
  }

  @media screen and ${device.max_tablet} {
    align-items: flex-start;
    width: 100%;
  }

  @media screen and ${device.tablet} {

    color: ${props => props.textColor};
    padding: 0.75em;
    height: 3em;
  }
`;